import express from 'express'
import { randomBytes } from 'crypto'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())
app.use(cors())

const commentByPostId = {}

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentByPostId[req.params.id] || [])
})

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('Hex')
    const { content } = req.body

    const comments = commentByPostId[req.params.id] || []

    comments.push({
        id: commentId,
        content
    })

    commentByPostId[req.params.id] = comments

    res.status(201).send(comments)
})

const PORT = 4001

app.listen(
    PORT,
    console.log(`Server running on port ${PORT}`)
);