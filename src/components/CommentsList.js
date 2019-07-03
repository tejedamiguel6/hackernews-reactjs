import React from 'react'


function CommentList ({ comments } ){
    
    return (
        <ul>
            {comments.map((comment)=> {
                return (
                    <li className='comment-list'>
                        <p>By: {comment.by} on {comment.time}</p>
                        <p dangerouslySetInnerHTML={{__html: comment.text}} />

                    </li>
                    
                )

            })}
            
        </ul>
    )
}

export default CommentList