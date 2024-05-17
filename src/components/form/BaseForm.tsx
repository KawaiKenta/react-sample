import { useState } from "react"

const BaseForm = () => {
    const [form, setForm] = useState({
        name: "John Doe",
        age: "22",
    });
    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <>
            <form action="submit">
                <div>
                    <label htmlFor="name">名前：</label>
                    <input type="text" name="name" onChange={handleForm}/>
                </div>
                <div>
                    <label htmlFor="age">年齢：</label>
                    <input type="number" name="age" onChange={handleForm}></input>
                </div>
            </form>
            <div>
                <h3>Hello, {form.name}! You are {form.age} years old</h3>
            </div>
        </>
    )
}

export default BaseForm;