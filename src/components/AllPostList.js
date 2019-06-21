import React from 'react'
import PropTypes from 'prop-types'

function AllPostList ({ posts }) {
    // const {title, by, score, time, url, text} = posts
    return (
            <ul className='post-container'>
                {posts.map((post)=> {
                    return (
                        <React.Fragment>
                            <li key={post} className='title-list'>
                                <a className='title' href={post.url } > {post.title}</a>
                            </li>
                            <li className='post-from'>
                                By:  <a href={post.by} > {post.by} </a>on {post.time}
                             </li>
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