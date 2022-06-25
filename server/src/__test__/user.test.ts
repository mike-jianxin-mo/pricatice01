import request from 'supertest'
import app from '../app'

describe('test simple user functions', () => {
    it('get user', async () => {
        await request(app)
            .post('/users')
            .send({userName: 'mike mo'})
            .expect(200)
    })
})

