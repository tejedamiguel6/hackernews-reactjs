import React from 'react'
import PropTypes from 'prop-types'




function AllPostList ({ types }) {
    // const {title, by, score, time, url, text} = types
    return (
            <ul className='post-container'>
                {types.map((type)=> {
                    return (
                        <React.Fragment>
                            <li className='title-list'>
                                <a className='title' href={type.url } > {type.title}</a>
                            </li>
                            <li className='post-from'> 
                                By:  <a href={type.by} > {type.by} </a>on {type.time}
                             </li>
                            
                        </React.Fragment>   
                    )
                })}
            </ul>       
    )  
}

AllPostList.propTypes = {
    types: PropTypes.array.isRequired

}

export default AllPostList