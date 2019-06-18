import React from 'react'
import PropTypes from 'prop-types'




function AllPosts ({ selected, onUpdatePost }) {
    const storyOptions = [ 'top', 'new' ]
    return (
        <li>
            <ul className='flex-center'>
                    {storyOptions.map((storyOption)=> (
                        <li key={storyOption}>
                             <button
                              className='btn-clear'
                              style={storyOption === selected ? {color: 'rgb(255, 105, 180 )'} : null}
                              onClick={()=> onUpdatePost(storyOption)}>
                                {storyOption}
                            </button>   
                        </li>
                    ))}
                </ul> 
        </li>
    )
}

AllPosts.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdatePost: PropTypes.func.isRequired

}


export default AllPosts