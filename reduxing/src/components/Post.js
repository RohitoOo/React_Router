import React , {Component} from 'react'; 
import axios from 'axios';
import {connect} from 'react-redux';

class Post extends Component {

state = {
    post : []
}



// componentDidMount(){
//     axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.post_id)
//     .then(res => {
//         console.log("POST" , res.data)
//         this.setState({
//             post : res.data
//         })
//     })
//   }

render(){
    const id = parseInt(this.props.match.params.post_id) - 1 
    console.log(typeof(id))
console.log("id ", id)
    return (
        <div className="container">
            <h3>{this.props.posts[id].id}</h3>
            <p>{this.props.posts[id].title}</p>
        </div>
    )
}

}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps)(Post);