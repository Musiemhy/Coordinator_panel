import React, { useContext, useState } from 'react'
import "./register.scss"
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db } from "../../Firebase/Firebase"
import { doc, addDoc, setDoc } from "firebase/firestore"; 
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../components/context/AuthContext"

const Register = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
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

    const handleRegister = (e) => {
      e.preventDefault();
  
      // Check if all fields are entered
      if (!fname || !mname || !lname || !gender || !age || !phone || !email || !campus || !idno || !password) {
          alert("Please fill all the fields.");
          return;
      }
  
      createUserWithEmailAndPassword(auth, idno + "@domain.com", password)
          .then((userCredential) => {
              const user = userCredential.user;
              dispatch({ type: 'LOGIN', payload: user });
  
              // Use the user ID from Firebase authentication to create a document in the Users collection
              const add = async () => {
                  await setDoc(doc(db, "Users", user.uid), {
                      accountType: "Admin",
                      age: age,
                      campus: campus,
                      email: email,
                      firstName: fname,
                      gender: gender,
                      idNumber: idno,
                      lastName: lname,
                      middleName: mname,
                      password: password,
                      phone: phone,
                  });
              }
              add();  // Call the function
  
              navigate('/');
          })
          .catch((error) => {
              setError(true);
          });
    }
  
  return (
    <div className='register'>
      <div className='top'>
        <h1>Here's Your First Step With Us</h1>
      </div>
      <div className="bottom">
        <div className="left">
        <img src={process.env.PUBLIC_URL + '/unity_university_official_logo1.jpg'} alt="logo" />
        <p>Already have an account? <a href="/login">Signin here</a></p>
        </div>
        <div className="right">
        <form onSubmit={handleRegister}>
          <div className="formInput">
            <label>First Name</label><input type="text" placeholder="First Name" onChange={e=>setFname(e.target.value)}/>
          </div>  
          <div className="formInput">
            <label>Middle Name</label><input type="text" placeholder="Middle Name" onChange={e=>setMname(e.target.value)}/>
          </div>
          <div className="formInput">
            <label>Last Name</label><input type="text" placeholder="Last Name" onChange={e=>setLname(e.target.value)}/>
          </div>
          <div className="formInput">
            <label>Gender</label><input type="text" placeholder="Gender" onChange={e=>setGender(e.target.value)}/>
          </div>
          <div className="formInput">
            <label>Age</label><input type="text" placeholder="Age" onChange={e=>setAge(e.target.value)}/>
          </div>
          <div className="formInput">
            <label>Phone</label><input type="phone" placeholder="Phone" onChange={e=>setPhone(e.target.value)}/>
          </div>
          <div className="formInput">
            <label>Email</label><input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
          </div>
          <div className="formInput">
            <label>Campus</label><input type="text" placeholder="Campus" onChange={e=>setCampus(e.target.value)}/>
          </div>
          <div className="formInput">
            <label>ID NUmber</label><input type="text" placeholder="ID Number" onChange={e=>setIdno(e.target.value)}/>
          </div>
          <div className="formInput">
            <label>Password</label><input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
          </div>
            <button type="submit">Register</button>       
      </form>
        </div>
      </div>
    </div>
  )
}

export default Register
