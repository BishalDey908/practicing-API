import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  const[textData,setTextData]=useState([])
  const[handleState,setHandleState]=useState(true)
  const handlesubmit = (e) =>{
    e.preventDefault()
    console.log(username,password)
    axios.post("http://localhost:3000/reg",{username,password})
    .then((e)=>{
      alert(e.data.msg)
    })
    .catch((e)=>{
      console.log(e.data)
    })
  }

  const handlesubmit2 = (e) =>{
    e.preventDefault()
    console.log(username,password)
    axios.post("http://localhost:3000/login",{username,password})
    .then((e)=>{
      alert(e.data.msg)
    })
    .catch((e)=>{
      console.log(e.data)
    })
  }

  useEffect(()=>{
    axios.get("http://localhost:3000/show")
    .then((e)=>{
      setTextData(e.data.data)
      console.log(e.data.data)
    })
    .catch((e)=>{
      console.log(e.data.message)
    })
  },[handleState])

  return (
    <>
      <form onSubmit={handlesubmit}>
      <label htmlFor="username"></label>
        <input type="text" placeholder="Username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <br />
        <label htmlFor="password"></label>
        <input type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <button type="submit">Login</button>
      </form>

      <br />

      <form onSubmit={handlesubmit2}>
      <label htmlFor="username"></label>
        <input type="text" placeholder="Username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <br />
        <label htmlFor="password"></label>
        <input type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <button type="submit">Login</button>
      </form>

      <br />

      <h1>Data</h1>
      <p>{
        textData.map((e,index)=>{
          return <>
          <div >
            <p>{e.text}</p>
          </div>
          </>
        })
      }</p>
      <button onClick={()=>setHandleState(!handleState)}>Show Text</button>
    </>
  )
}

export default App
