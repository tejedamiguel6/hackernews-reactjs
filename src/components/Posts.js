import React, { Component}  from 'react'
import { fetchMainPosts } from '../utils/api'
import PropTypes from 'prop-types'
import AllPostList from './AllPostList'


class Posts extends Component {
    state = {
        Loading: false,
        error: null,
        types: {},
        posts: null
    }

    componentDidMount () {
        this.updatePost(this.state.posts)
    }

    updatePost = (posts) => {
        this.setState({
            posts: null,
            error: null,
        })
        fetchMainPosts(this.props.type)
            .then((data)=> {
                this.setState(({ types }) => ({
                    types: {
                        ...types,
                        [posts]: data
                    }
                }))
            })

            .catch(() => {

            console.warn('there was an error fetching your stories')
            this.setState({
                error: 'There was an error fetching sotries'
            })
        })
    }
    isLoading= () => {
        const { types, posts, error } = this.state
        return !types[posts] && error === null
    }
    render () {
        //destructing
        const { types, error, posts } = this.state
        return (
            <div>
                 { types[posts] && <AllPostList posts={types[posts]} /> } 
                {/* <AllPosts selected={posts} onUpdatePost={this.updatePost} /> */}
                {this.isLoading() && <p>Loading</p> }
                {error && <p>{error} </p>}
            </div>
        )
    }
}

Posts.propTypes = {
    type: PropTypes.oneOf(['top', 'new'])
  }

 
export default Posts