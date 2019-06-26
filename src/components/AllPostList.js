import React from 'react'
import PropTypes from 'prop-types'


import { Link } from 'react-router-dom'

function AllPostList ({ posts, id, by, descendants }) {
    return (
            <ul className='post-container'>
                {posts.map((post)=> {
                    return (
                        <React.Fragment>

                    

                            <li key={post} className='title-list'>
                                <a className='title' href={post.url } > {post.title}</a>
                            </li>


                         
                         <span className='spanLink'>by: <Link to={`/user?id=${post.by}`}>{post.by}</Link></span>
                         <span> on {post.time}</span>

                         <span>
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



