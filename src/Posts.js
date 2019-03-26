import React, { Component } from 'react';
import './posts.css';
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let val = data.map((item) => {
                    return (
                        <div key={item.id}>
                          <p>{item.id}</p>
                            <p>{item.userId}</p>
                            <p>{item.title}</p>
                            <p>{item.body}</p>
                        </div>
               )
                })
                this.setState({ data: val });
            })
            .catch(error => console.log("error", error));
    }

    render() {

        return (
            <div>
      {this.state.data}
      
      </div>
        );
    }
}
export default Posts;