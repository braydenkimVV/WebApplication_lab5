import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

class PartTwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: ''

        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/photos', this.state)
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMessage: error.message })
            })
    }


    render() {
        return (
            <div style={{marginTop: '50px'}} >
                <form onSubmit={this.submitHandler}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-2">
                                <label className="form-label" style={{fontWeight: 'bold'}}>User Id</label>
                                <input type="text" className="form-control" name="userId" value={this.state.userId} onChange={this.changeHandler}></input>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-2">
                                    <label className="form-label" style={{fontWeight: 'bold'}}>Title</label>
                                    <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.changeHandler}></input>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-2">
                                    <button type="submit" className="btn btn-primary" style={{marginTop: '20px'}}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default PartTwo