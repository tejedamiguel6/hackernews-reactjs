const api = `https://hacker-news.firebaseio.com/v0/`
const json = `.json?print=pretty`





export function fetchMainPost (selectedPost) {
    return fetch(`${api}/${selectedPost}stories${json}`)
        .then((res) => res.json())
        .then((id) => {
            if(!id) {
                throw new Error(`there was an error fetching${selectedPost} type`)
            }
            return id.slice(0,5)
        })

        // .then((ids) => Promise.all(ids.map(fetchItem)))
        // .then((posts) => removeDeleted(onlyPosts(removeDead(posts))))

}

