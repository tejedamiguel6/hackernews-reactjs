const api = `https://hacker-news.firebaseio.com/v0/`
const json = `.json?print=pretty`


function removeDead (posts) {
    return posts.filter(Boolean).filter (({ dead }) => dead !== true)
}


function removeDeleted(posts) {
    return posts.filter(({ deleted }) => deleted !== true )
} 


function OnlyComments (posts) {
    return posts.filter(({ type }) => type === 'comment')
}


function onlyPosts (posts){
    return posts.filter(({ type }) => type === 'story')
}



export function fetchComments (ids) {
    return Promise.all(ids.map(fetchItem))
        .then((comments) => removeDeleted(OnlyComments(removeDead(comments))))
}





//grabbing id of evey post and turing it into readable data
export function fetchItem(id) {
    return fetch(`${api}/item/${id}/${json}`)
        .then((data) => data.json())

}




//grabing the user name 
export function getUser(id){
    return fetch(`${api}/user/${id}/${json}`)
    .then((data) => data.json())
}




export function getPost(ids) {
    return Promise.all(ids.map(fetchItem))
    .then((posts) => removeDeleted(onlyPosts(removeDead(posts))))
}



//Grabbing the main post will add this to the main page
export function fetchMainPosts (type) {
    return fetch(`${api}/${type}stories/${json}`)
        .then((res) => res.json())
        .then((ids) => {
            if(!ids) {
                throw new Error(`There was an error fetching the ${type} stories`)
            }
            return ids.slice(0, 50)

        })
        .then((ids) => Promise.all(ids.map(fetchItem)))
        .then((posts) => removeDeleted(onlyPosts(removeDead(posts))))

    }


