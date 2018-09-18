import React , {Component} from 'react'; 
import axios from 'axios';
import {connect} from 'react-redux';
import { deletePost } from '../actions/postActions'


class Post extends Component {



handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/contact')
  }

render(){
     console.log("PROPS" , this.props.post)
    // const id = parseInt(this.props.match.params.post_id)  
    const post = this.props.post ?  
    (
        
      
            <div className="container">
            <h3>{this.props.post.id}</h3>
            <p>{this.props.post.title}</p>
            <p>{this.props.post.data}</p>

            

            <button style={{ height:"30px" , width:"auto"}} 
            onClick={this.handleClick} > Delete</button>
            </div>
        
            
        
    )  : (

       "Post Loading..."

    )

    return (
        <div>
        {post}
        </div>
        
    )
}

}

const mapStateToProps = (state, ownProps) => {
let id = parseInt(ownProps.match.params.post_id) ; 

// Create Props -> this.post
    return {
        post : state.posts.find( post => post.id === id )
    }
}

const mapDispatchToProps = (dispatch) => {
    //store.dispatch({type: 'ADD_TODO'} , {todo : "Buy Milk"})

 // Create Props -> this.deletePost   
    return {
      deletePost : (id) => { dispatch(deletePost(id))}
    }
    }
    

export default connect(mapStateToProps ,mapDispatchToProps )(Post);