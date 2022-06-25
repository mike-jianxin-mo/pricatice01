import request from 'supertest'
import app from '../app'

describe('test simple user functions', () => {
    it('get user', async () => {
        await request(app)
            .post('/users')
            .send({userName: 'mike mo'})
            .expect(201)
    })

    it('add user', async () => {
        await request(app)
            .post('/users')
            .send({userName: 'Jeff'})
            .expect(201)

        const response = await request(app)
            .get('/users')
        
        // affected by the previous test, the user name is 'mike mo'
        // data should be re-init before run it.
        expect(response.body[0].userName).toEqual('Jeff')
    })
})

