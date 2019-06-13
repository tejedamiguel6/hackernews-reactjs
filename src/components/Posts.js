import React, { Component}  from 'react'
import { fetchMainPost } from '../utils/api'

import PropTypes from 'prop-types'

class Posts extends Component {

    

    state = {
        selectedPost: 'top',
        error: null,
        loading: false
    }


    updatePost = (selectedPost) => {
        this.setState({
            selectedPost,
            error: null
        })

        fetchMainPost(this.props.type)
        .then((selectedPost) => this.setState({
            selectedPost,
            error: null,
        }))
        .catch(() => {
            console.warn('error fetching stories: ' )


            this.setState({
                error: 'There was an error getting your stories' 
            })
        })
    }



    isLoading= () => {
        return this.state.selectedPost == null && this.state.error == null

    }

    render () {
        const posts = ['top', 'new']

        return (
            <div>
                <ul className='flex-center'>
                    {posts.map((post)=> (
                        <li key={post}>
                             <button
                              className='btn-clear'
                              style={post === this.state.selectedPost ? {color: 'rgb(187, 46, 31 )'} : null}
                              onClick={()=> this.updatePost(post)}>

                                {post}
                            </button>
                        </li>
                    ))}
                </ul>

                {this.isLoading() && <p>Loading</p> }

                {this.state.error && <p>{this.state.error} </p>}

                { this.state.selectedPost && <pre>{JSON.stringify(this.state.selectedPost, null, 2)}</pre> }
                   
            </div>

        )
    }

    
}

Posts.propTypes = {
    type: PropTypes.oneOf(['top', 'new'])
}







export default Posts

