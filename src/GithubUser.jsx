import { useEffect, useState } from "react"

export function GithubUser({username}){
const[data,setData]=useState(null)

useEffect(()=>{
    fetch(`http://api.github.com/users/${username}`)
    .then(response=>{
        return response.json()
    })
    .then(json=>{
        console.log(json)
        setData(json)
    })
},[username])

return(
    <div>
        {data && <h1>Name: {data.name} </h1> }
        {data && <h3>Login: {data.login}</h3>}
        {data &&  <img className="avatar" src={data.avatar_url} alt="immagine"/>}
    </div>
)
}
