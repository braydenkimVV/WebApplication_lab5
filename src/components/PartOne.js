import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

class PartOne extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         error: ''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            // console.log(response)
            const posts = response.data;
            this.setState({posts})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMessage: error.message})
        })
    }
    deleteRow(id,e){
        axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(response => {
            console.log(response);
            console.log(response.data);
            const posts = this.state.posts.filter(item => item.id !== id);
            this.setState({posts});
            })
        
    }
  render() {
    const {posts, errorMessage}=this.state
    return (
      <div>
        <h1>List of albums</h1>
                    <table className="table table-striped">
                    <thead className="table-primary">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Thumbnail</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
        {
            posts.map((post) => 
                    <tr key={post.id} style={{textAlign: "center", verticalAlign: "middle"}}>
                        <td style={{textAlign: 'center'}}>{post.id}</td>
                        <td>{post.title}</td>   
                        <td><img src={post.thumbnailUrl}></img></td>
                        <td><input type="submit" className="btn btn-primary" value="Delete"
                        onClick={(e) => this.deleteRow(post.id)}></input></td>
                    </tr>
            )
            }
            </tbody>
            </table>{
            
        }
      </div>
    )
  }
}

export default PartOne