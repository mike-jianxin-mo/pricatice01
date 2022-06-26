export type UserInfo = {
    userName: string;
}

export type DBUserInfo = {
    id: string;
    userName: string;
}

export type UserServiceType = {
    addUser: (data: UserInfo) => DBUserInfo[]
}

class UserService {
    addUser = async (data: UserInfo) => {

        console.log(data)
        const requestOptions = {
            method: 'POST',
            // body parser is empty, if the headers mistyping to header!!!
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }

        const response = await fetch('http://localhost:9000/users', requestOptions)
        
        const result = await response.json();

        console.log(result);
 
        return result;
    }
}

const userService = new UserService()

export default userService