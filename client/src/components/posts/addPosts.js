import React, { useState } from 'react'
import axios from 'axios'

export const AddPosts = () => {

    const [title, setTitle] = useState("")

    const submitHandler = async (event) => {
        event.preventDefault()

        await axios.post('http://localhost:4000/posts', {
            title
        })

        setTitle("")
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group p-2">
                    <label>Title</label>
                    <input
                        required
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="form-control"
                    />
                    <button className="btn btn-primary mt-2">Submit</button>
                </div>
            </form>
        </div>
    )
}
