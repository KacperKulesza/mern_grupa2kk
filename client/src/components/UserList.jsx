import { useState, useEffect } from "react"
import axios from "axios"

const UserList = () => {

    const [usersList, setUsersList] = useState([])

    async function fetchData(){
        try{
          // const res = await fetch("http://localhost:8080/api/users", {method: "GET"})
          // if(!res.ok){
          //   throw new Error(`network response was not ok: ${res.status}`)
          // }
          // const data = await res.json()
          // setUsersList(data)
          // console.log(data)

          const response = await axios.get("http://localhost:8080/api/users")
          setUsersList(response.data)
        }catch(err){
          console.log(err)
        }
      }
    
      async function deleteUser(id){
     
        const confirmation = window.confirm("Czy chcesz skasować użytkownika?")
        if(!confirmation) return
        try{
          //   const res = await fetch(`http://localhost:8080/api/users/${id}`, {method: "DELETE"})
          //   console.log(res)
          //   if(!res.ok){
          //     throw new Error(`network response was not ok: ${res.status}`)
          //   }
          //   fetchData()
            const response = await axios.delete(`http://localhost:8080/api/users/${id}`)
            if(!response.ok) throw new Error("Error response is not ok")
            fetchData()
        }catch(err){
          console.log(`There was a problem: ${err}`)
        }
      }

      useEffect(() => {
        fetchData()
      }, [])

    return(
        <>
            <h1>Lista użytkowników</h1>
        <h2>Users:</h2>
        <button onClick={fetchData}>Pobierz dane</button>
        <ul style={{listStyle: 'none'}}>
            {
            usersList.map(user => {
                return(<>
                <li key={user._id} onClick={() => deleteUser(user._id)}>Imię: {user.name}, <br></br> Email: {user.email}, <br></br> Age: {user.age} <img src={user.imageUrl} height="100" alt="bandyta" /></li><br></br>
                </>)
            })
            }
        </ul>
        </>
    )
}

export default UserList