import express from 'express'
import app from './app'

const port = 9000

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
})