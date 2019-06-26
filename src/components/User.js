import React, { Component } from 'react'
import { getUser, getPost } from '../utils/api'
import queryString from 'query-string'
import PropTypes from 'prop-types'

import AllPostList from '../components/AllPostList'




class User extends Component {

    state = {
        user: null,
        loadingUser: true,
        posts: null,
        loadingPosts: true,
        error: null,
      }
      componentDidMount() {
        const { id } = queryString.parse(this.props.location.search)
    
        getUser(id)
          .then((user) => {
            this.setState({ user, loadingUser: false})
    
            return getPost(user.submitted.slice(0, 30))
          })
          .then((posts) => this.setState({
            posts,
            loadingPosts: false,
            error: null
          }))
          .catch(({ message }) => this.setState({
            error: message,
            loadingUser: false,
            loadingPosts: false
          }))
      }
      render() {
        const { user, posts, loadingUser, loadingPosts, error } = this.state
    
        if (loadingUser === true) {
            return <p>Loading</p>

          }

          if (loadingPosts === true) {
            return <p>Loading</p>
            
          }

        if (error) {
          return <p className='center-text error'>{error}</p>
        }
    
        return (
            <React.Fragment>
                {loadingUser === true ? <p>Loading </p> : 
                
            <React.Fragment> 
                    <h1 className='header'>{user.id}</h1>
                    <div className='header'>
                        <p>User since {user.created}, has {user.karma} Karma points</p>
                    
                    </div>
                    
                    <div class='header'>
                        <p>{user.about}</p>
                    </div>

                    <React.Fragment>

                        {loadingPosts === true ? <p>Rendering posts</p> : 
                    <React.Fragment>
                        <h2 class='post'>Posts</h2>
                        
                        <AllPostList posts ={posts}/>

                    </React.Fragment>}
                    </React.Fragment>

            </React.Fragment>}


            </React.Fragment>
        
           
            
                  

       
          
        )
      }
    }

    export default User