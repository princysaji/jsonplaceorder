import React, { Component } from 'react';

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
            .then(data => this.setState({ data }));
    }
    render() {
        const { hits } = this.state;

        return (
          <div>
            <ul>
                {
                  hits.map(hit =>
                  <li key={hit.userId}>
                    
                  </li>
                )}
            </ul>
            </div>
        );
    }
}
export default Posts;