import React, { Component}  from 'react'
import { fetchMainPosts } from '../utils/api'
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


//new component will hold my logic
class Posts extends Component {
    state = {
        selectedPost: 'new',
        error: null,
        type: null
       
        
    }

    componentDidMount () {
        this.updatePost(this.state.selectedPost)
    }


    updatePost = (selectedPost) => {
        this.setState({
            selectedPost,
            error: null,
                     
        })


        fetchMainPosts(selectedPost)
            .then((type) => this.setState({
                type,
                error: null
            }))
            .catch(() => {
                console.warn('there was an error fetching your stories')
            })

    }


    isLoading= () => {
        return this.state.type == null && this.state.error == null

    }
    render () {
        //destructing 

        return (
            <div>
                <AllPosts 
                    selected = {this.state.selectedPost}
                    onUpdatePost ={this.updatePost}
                />
                {this.isLoading() && <p>Loading</p> }

                {this.state.error && <p>{this.state.error} </p>}
                

                { this.state.type && <pre>{JSON.stringify(this.state.type, null, 2)}</pre> }

        
            </div>

        )
    }

    
}

Posts.propTypes = {
    type: PropTypes.oneOf(['top', 'new'])
}







export default Posts

