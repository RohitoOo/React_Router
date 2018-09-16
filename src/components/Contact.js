import React , { Component } from 'react'; 
import axios from 'axios';

class Contact extends Component {

  state = {
    posts : []
  };

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      this.setState({
        posts : res.data.slice(0,10)
      })
    })
  }

render(){
  const { posts } = this.state; 
  return(
    <div>
        <ul>

       {posts.length ?  ( 
         
         posts.map( (post , i) =>{
         
           return  <li key={i}>{post.title}</li>
          })
          ) : (
            <p>Loading...</p>
          )
        
        
        }
        </ul>
    </div>
  )
}
}

export default Contact;
