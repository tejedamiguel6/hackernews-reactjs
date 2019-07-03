import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function AllPostList ({ posts }) {
    
    return (
            <ul className='post-container'>
                {posts.map((post)=> {
                    return (
                        <React.Fragment>
                        <li key={post} className='title-list'>
                            <a className='title'
                                rel='noopener noreferrer'
                                target='_blank' href={post.url }> 
                                {post.title}</a>
                        </li>
                         <span className='spanLink'>by: <Link to={`/user?id=${post.by}`}>{post.by}</Link></span>
                         <span> on {post.time}</span>

                         <span>
                             {/* with <Link to ={'/comments'}> comments</Link> */}
                            with <Link to={`/post?id=${post.id}`}>{post.descendants}</Link> comments
                        </span>
                        </React.Fragment>  
                    )
                })}
            </ul>
    )
}


AllPostList.propTypes = {
    posts: PropTypes.array.isRequired
}


export default AllPostList




