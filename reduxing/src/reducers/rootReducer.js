const initState = {
    posts : [
        {id: 1 , title: "Article 1"},   
        {id: 2 , title: "Article 1"},   
        {id: 3 , title: "Article 1"}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;