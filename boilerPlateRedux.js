const {createStore} = Redux;

const initState = {
  todos:[ "Say HelloOo"],
  posts:[ ]
}

function myreducer(state = initState, action){
  
  if (action.type == "ADD_TODO"){
 return {
   ...state,
  todos: [...state.todos , action.todo]
 }
  }
    if (action.type == "ADD_POST"){
 return {
   ...state,
  posts: [...state.posts , action.post]
 }
  }
 else {
  console.log("Hmmmm")
}
  
}
const store = createStore(myreducer);


store.subscribe( () => {
  console.log('state update');
  console.log(store.getState());
})

store.dispatch( { type : 'ADD_TODO' , todo: 'Buy Milk' } )
store.dispatch( { type : 'ADD_TODO' , todo: 'Buy Water' } )
store.dispatch( { type : 'ADD_TODO' , todo: 'Buy Beer' } )
store.dispatch( { type : 'ADD_POST' , post: 'Article 1' } )