import React, { Component } from 'react';
import './posts.css';
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            userId:'',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let val = data.map((item) => {
                    return (
                        <div key={item.id} className="part">
                            <p>{item.title}</p>
                            <p>{item.body}</p>
                        </div>
               )
                })
                this.setState({ data: val });
            })
            .catch(error => console.log("error", error));
    }
    singlepost = () =>
    {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let val = data.map((item) => {
                     if (item.userId==3)
                        {
                        return (
                       
                            <div key={item.id} className="part">
                                <p>{item.title}</p>
                                <p>{item.body}</p>
                            </div>
                        )
                        }        
                })
                this.setState({ data: val });
            })
            .catch(error => console.log("error", error));
    }
    render() {

        return (
            <div >
                <button onClick={this.singlepost}>View My Post</button>
      {this.state.data}
      
      </div>
        );
    }
}
export default Posts;