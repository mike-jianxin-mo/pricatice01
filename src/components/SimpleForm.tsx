import React from 'react'

const SimpleForm = () => {
    return <div>
        <div>Simple Form</div>
        <form>
            <fieldset>
                <label>Name</label>
                <input name="name"></input>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default SimpleForm