import React , { Component } from 'react'; 
// import axios from 'axios';
import {NavLink, Link} from 'react-router-dom'
import { Card } from '@material-ui/core';
import {connect} from 'react-redux';
class Contact extends Component {

  state = {
    posts : []
  };

render(){


  const { posts } = this.props; 

  return(
    <div className="container">
       {posts.length ?  (     
         posts.map( (post , i) =>{    
           return  <div className="container">
           <h3 key={i}><a href= {'/' + post.id}>{post.title}</a> 
           </h3>
           
              </div>  
          })
          ) : (
            <p>Loading...</p>
          )   
        }
     
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    posts : state.posts
  }
}




export default connect(mapStateToProps)(Contact);
