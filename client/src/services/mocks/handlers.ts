import {rest} from 'msw';

// Describe the shape of the "req.body".
interface UpdateUserRequestBody {
    userName: string;
}

//  ts for handler
// ref: https://dev.to/kettanaito/type-safe-api-mocking-with-mock-service-worker-and-typescript-21bf
export const handlers = [
    rest.post<UpdateUserRequestBody>('http://localhost:9000/users', (req, res, ctx) => {
        const { userName } = req.body
        return res(
            ctx.json([{id: 'hasfhdsklfx', userName: userName}])
        )
    })
]