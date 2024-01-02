import { useContext, useState } from "react"
import "./Login.scss"
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../Firebase/Firebase"
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../components/context/AuthContext"

const Login = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      dispatch({type:"LOGIN", Users:user})
      navigate("/")
      // ...
    })
    .catch((error) => {
      setError(true);
    });
  

  }

  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="ID Number" onChange={e=>setEmail(e.target.value)}/>
        <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
        <button type="submit">Login</button>
        {error && <span>Wrong email or password</span>}
      </form>
      <div>
        <p>Don't have an account? <a href="/register">Register here</a></p>
      </div>
    </div>
  )
}

export default Login
