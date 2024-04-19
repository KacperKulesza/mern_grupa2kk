import { useState } from "react"
import axios from "axios"

const AddUserForm = () => {

    const [newUser, setNewUser] = useState({name: "", email: "", age: 0})

    async function submitHandler(e){
        e.preventDefault()

        const formData = new FormData();
        formData.append("name", newUser.name);
        formData.append("age", newUser.age);
        formData.append("email", newUser.email);

        for(let [key, value] of formData.entries())
        {
            console.log(`${key}: ${value}`)
        }

        try{
            // const response = await fetch("http://localhost:8080/api/users", {method: "post", headers: {'Content-type': 'application/json'}, body: JSON.stringify(newUser)})
            const response = await axios.post("http://localhost:8080/api/users", formData)
        }
        catch(err){
            console.error(`Some problems with fetch operation: ${err.message}`)
        }
    }

    return(
        <>
            <h5>Add a new user</h5>
            <form onSubmit={submitHandler} method="POST">
                <input type="text" placeholder="Wprowadź imię użytkownika" value={newUser.name} onChange={e => setNewUser({...newUser, name: e.target.value})}/>
                <br></br>
                <input type="email" placeholder="Wprowadź email użytkownika" value={newUser.email} onChange={e => setNewUser({...newUser, email: e.target.value})}/>
                <br></br>
                <input type="number" placeholder="Wprowadź wiek użytkownika" value={newUser.age} onChange={e => setNewUser({...newUser, age: e.target.value})}/>
                <br></br>
                <button type="submit">Add user</button>
            </form>
        </>
    )
}

export default AddUserForm