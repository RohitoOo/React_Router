import React , {Component} from 'react'; 
import axios from 'axios';


class Post extends Component {

state = {
    post : []
}



componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.post_id)
    .then(res => {
        console.log("POST" , res.data)
        this.setState({
            post : res.data
        })
    })
  }

render(){
console.log("Post component")
    return (
        <div className="container">
            <h3>{this.state.post.title}</h3>
            <p>{this.state.post.body}</p>
        </div>
    )
}

}

export default Post