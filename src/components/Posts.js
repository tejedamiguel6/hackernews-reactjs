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

function AllPostList ({ types, href }) {
    // const {title, by, score, time, url, text} = types
    return (
            <ul className='post-container'>
                {types.map((type)=> {
                    return (
                        <React.Fragment>
                            <li className='title-list'>
                                <a className='title' href={type.url} > {type.title}</a>
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


class Posts extends Component {
    state = {
        selectedPost: 'top',
        error: null,
        types: {}
    }

    componentDidMount () {
        this.updatePost(this.state.selectedPost)
    }


    updatePost = (selectedPost) => {
        this.setState({
            selectedPost,
            error: null,         
        })

        if(!this.state.types[selectedPost]){
            fetchMainPosts(selectedPost)
                .then((data)=> {
                    this.setState(({ types }) => ({
                        types: {
                            ...types,
                            [selectedPost]: data

                        }
                    }))
                })

                .catch(() => {
                    console.warn('there was an error fetching your stories')
    
                this.setState({
                    error: 'There was an error fetching sotries'
                })
             })
        }
    }


    isLoading= () => {
        const { types, selectedPost, error } = this.state

        return !types[selectedPost] && error === null

    }
    
    render () {
        //destructing 
        const { types, error, selectedPost } = this.state

        return (
            <div>
                <AllPosts 
                    selected = { selectedPost}
                    onUpdatePost ={this.updatePost}
                />
                {this.isLoading() && <p>Loading</p> }

                {error && <p>{error} </p>}
            
                { types[selectedPost] && <AllPostList types={types[selectedPost]} href={types[selectedPost]}/> }        
            </div>
        )
    }
}

Posts.propTypes = {
    type: PropTypes.oneOf(['top', 'new'])
}


export default Posts