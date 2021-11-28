import React, { Component } from 'react';
import axios from 'axios'


class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => {
                this.setState({ comments: response.data })
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

    }
    render() {
        const { comments } = this.state
        return (
            <div className="bg-gray-800">
                {
                    comments.length ?
                        comments.map(post =>
                            <div className="p-5" key={post.id}>
                                <span className="inset-y-2/4">NAME: {post.name}</span><br />
                                <span>EMAIL: {post.email}</span><br />
                                <span className="text-gray-100">BODY: {post.body}</span>
                            </div>)
                        : null
                }
            </div>
        )
    }
}

export default Gallery