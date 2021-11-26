import React, { Component } from 'react'
import axios from 'axios'


class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => {
                this.setState({ posts: response.data })
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

    }
    render() {
        const { posts } = this.state
        return (
            <div className="bg-gray-800">
                {
                    posts.length ? 
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    null
                }
            </div>
        )
    }
}

export default Gallery