import express from 'express'

const PORT = 3000
const app = express()

app.get('/', (_, res) => {
    res.send('<h1>Hello World</h1>')
})

app.listen(PORT, '0.0.0.0', () => {
    console.log('Server Listening...')
})