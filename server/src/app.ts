import express, {Request, Response} from 'express'
import {randomBytes} from 'crypto'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())
app.use(cors())

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

export default app