export type UserInfo = {
    userName: string;
}

export type UserServiceType = {
    addUser: (data: UserInfo) => void
}

class UserService {
    addUser = async (data: UserInfo) => {

        console.log(data)
        const requestOptions = {
            method: 'POST',
            header: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }

        const response = await fetch('http://localhost:9000/users', requestOptions)
        
        const result = await response.json();

        console.log(result);
    }
}

const userService = new UserService()

export default userService