import React, { Component}  from 'react'
import { fetchComments, fetchItem } from '../utils/api'
import queryString from 'query-string'
import CommentsList from '../components/CommentsList'

import { Link } from 'react-router-dom'




class Comments extends Component {

    state = {
        post: null,
        loadingComments: true,
        loadingPost: true,
        comments: null,
        
        error: null
    }

    componentDidMount() {
        const { id } = queryString.parse(this.props.location.search)

        fetchItem(id)
        .then((post) => {
            this.setState({
                post,
                loadingPost: false
            })
            return fetchComments(post.kids || [])
        })
        .then((comments) => this.setState({
            loadingComments: false,
            comments
            
        }))
        .catch(({ message }) => this.setState({
            error: message,
            loadingComments: false,
            loadingPost: false
        }))


    }


    render () {
        const { post, loadingPost, comments, loadingComments, error } = this.state
       
        if (loadingComments === true){
           return  <p>Loading Comments</p>
        }
        return (
            <React.Fragment>
              {loadingPost === true
                ? <p>Loading posts</p>
                : <React.Fragment>
                    <h1 className='header'>
                    {post.title}
                    </h1>
                    <p className='spanLink'>Post By: {post.by} on {post.time} with<Link to={`post?id=${post.id}`}> {post.descendants} </Link>  comments</p> 
                    
                    
                  </React.Fragment>}
                  {loadingComments === true ? <p>Loading comments</p> :
                <React.Fragment>
                   <CommentsList comments={comments}/>
                </React.Fragment>}
             
            </React.Fragment>
          )
    }
       
}


export default Comments




