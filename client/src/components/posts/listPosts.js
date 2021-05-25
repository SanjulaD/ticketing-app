import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ListPosts = () => {

    const [posts, setPosts] = useState({})

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts')
        setPosts(res.data)
    }

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div className="card" key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                </div>
            </div>
        )
    })

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
    </div>

}

export default ListPosts