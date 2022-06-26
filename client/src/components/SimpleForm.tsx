import React, { useState } from 'react'
import userService from '../services/UserService'

const SimpleForm = () => {
    const [userName, setUserName] = useState<string>("")    // 2. type of the state object, 3. don't forget the const!
    const [addedUserName, setAddedUserName] = useState<string>("")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)  => { // 1. event type
        event.preventDefault()
        console.log(userName)
        // alert('Form submitted ' + userName)
        userService.addUser({userName: userName})
            .then((response) => {
                console.log(response)
                const addedUserName = response[0].userName
                setAddedUserName(addedUserName)
            })
    }
    return <div>
        <div>A Simple Form</div>
        <div data-testid="show">Current User Name: {userName}</div>
        <div>Added User Name</div>
        <div data-testid="added-user">{addedUserName}</div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="my-input">User Name</label>
                <input id="my-input" name="userName" onChange={e => setUserName(e.target.value)} ></input>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default SimpleForm