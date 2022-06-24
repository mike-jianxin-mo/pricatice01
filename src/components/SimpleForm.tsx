import React, { useState } from 'react'

const SimpleForm = () => {
    const [userName, setUserName] = useState<string>("")    // 2. type of the state object, 3. don't forget the const!

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)  => { // 1. event type
        event.preventDefault()
        alert('Form submitted ' + userName)
    }
    return <div>
        <div>Simple Form</div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>Name</label>
                <input name="userName" onChange={e => setUserName(e.target.value)} ></input>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default SimpleForm