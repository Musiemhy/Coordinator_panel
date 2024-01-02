import React, { useContext, useState } from 'react'
import "./register.scss"
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../Firebase/Firebase"
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../components/context/AuthContext"

const Register = () => {
    const [error, setError] = useState(false)
    const [fname, setFname] = useState("")
    const [mname, setMname] = useState("")
    const [lname, setLname] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [campus, setCampus] = useState("")
    const [idno, setIdno] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, idno+"@domain.com", password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
          })
        .catch((error) => {
          setError(true);
        });
      
    
      }

  return (
    <div className='register'>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="First Name" onChange={e=>setFname(e.target.value)}/>
        <input type="text" placeholder="Middle Name" onChange={e=>setMname(e.target.value)}/>
        <input type="text" placeholder="Last Name" onChange={e=>setLname(e.target.value)}/>
        <input type="text" placeholder="Gender" onChange={e=>setGender(e.target.value)}/>
        <input type="text" placeholder="Age" onChange={e=>setAge(e.target.value)}/>
        <input type="phone" placeholder="Phone" onChange={e=>setPhone(e.target.value)}/>
        <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
        <input type="text" placeholder="Campus" onChange={e=>setCampus(e.target.value)}/>
        <input type="text" placeholder="ID Number" onChange={e=>setIdno(e.target.value)}/>
        <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
