import React from 'react'

const SimpleForm = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)  => { // 1. event type
        event.preventDefault()
        alert('Form submitted')
    }
    return <div>
        <div>Simple Form</div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>Name</label>
                <input name="name"></input>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default SimpleForm