import React, { Component}  from 'react'
import { fetchMainPosts } from '../utils/api'
import PropTypes from 'prop-types'
import AllPosts from './AllPosts'
import AllPostList from './AllPostList'



class Posts extends Component {
    state = {
        selectedPost: 'top',
        error: null,
        types: {}
    }

    componentDidMount () {
        this.updatePost(this.state.selectedPost)
    }

    updatePost = (selectedPost) => {
        this.setState({
            selectedPost,
            error: null,         
        })

        if(!this.state.types[selectedPost]){
            fetchMainPosts(selectedPost)
                .then((data)=> {
                    this.setState(({ types }) => ({
                        types: {
                            ...types,
                            [selectedPost]: data

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
    }

    isLoading= () => {
        const { types, selectedPost, error } = this.state
        return !types[selectedPost] && error === null

    }
    
    render () {
        //destructing 
        const { types, error, selectedPost } = this.state
        return (
            <div>
                <AllPosts 
                    selected = { selectedPost}
                    onUpdatePost ={this.updatePost}
                />
                {this.isLoading() && <p>Loading</p> }

                {error && <p>{error} </p>}
            
                { types[selectedPost] && <AllPostList types={types[selectedPost]} href={types[selectedPost]}/> }        
            </div>
        )
    }
}

Posts.propTypes = {
    type: PropTypes.oneOf(['top', 'new'])
}


export default Posts
