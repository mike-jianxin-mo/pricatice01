import express, {Request, Response} from 'express'
import {randomBytes} from 'crypto'
import bodyParser from 'body-parser'

const app = express()
const port = 9000

app.use(bodyParser.json())

type User = {
    id: string;
    userName: string;
}

const users: User[] = []

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
})

app.get('/users', (req: Request, res: Response) => {
    res.send(users)
})

app.post('/users', (req: Request, res: Response) => {
    const id = randomBytes(4).toString("hex")
    const {userName} = req.body
    const user = {id, userName}
    users.push(user)
    res.status(201).send(user)
})

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
})