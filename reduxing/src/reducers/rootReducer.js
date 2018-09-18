const initState = {
    posts : [
        {id: 1 , title: "Article 1", data : "Data For Id 1"},   
        {id: 2 , title: "Article 2", data : "Data For Id 2"},   
        {id: 3 , title: "Article 3", data : "Data For Id 3"}
    ],
    random : "randomData"
}

const rootReducer = (state = initState, action) => {
    if (action.type == "DELETE_POST"){
        let newPosts = state.posts.filter( post => {
            return action.id !== post.id
        });

        return {
            ...state,
            posts : newPosts
        }
       
    
    }
    return state    
}

export default rootReducer;