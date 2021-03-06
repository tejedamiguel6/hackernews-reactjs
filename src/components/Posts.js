import React, { Component }  from 'react'
import { fetchMainPosts } from '../utils/api'
import PropTypes from 'prop-types'
import AllPostList from './AllPostList'
import Loading from '../components/Loading'




class Posts extends Component {
    state = {
      posts: null,
      error: null,
      loading: true,
    }
    componentDidMount() {
      this.handleFetch()
    }
    componentDidUpdate(prevProps) {
      if (prevProps.type !== this.props.type) {
        this.handleFetch()
      }
    }
    handleFetch () {
      this.setState({
        posts: null,
        error: null,
        loading: true
      })

  
      fetchMainPosts(this.props.type)
        .then((posts) => this.setState({
          posts,
          loading: false,
          error: null
        }))

        .catch(()=> {
          console.warn('there was an error ')
        })

        .catch(({ message }) => this.setState({
          error: message,
          loading: false
        }))
    }
    render() {
      const {  error, loading, posts } = this.state
  
      if (loading === true) {
        return <Loading />
      }
  
      if (error) {
        return <p className='center-text error'>{error}</p>
      }
  
      return <AllPostList posts={posts} />
    }
  }
  
  Posts.propTypes = {
    type: PropTypes.oneOf(['top', 'new'])
  }
  

  export default Posts;