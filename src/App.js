import './App.css';
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Classrooms from "./pages/classrooms/Classrooms"
import { collection, getDocs } from "firebase/firestore";
import { db } from './Firebase/Firebase'; 
import { useEffect, useState } from 'react';
import { doc, addDoc } from "firebase/firestore"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './components/AuthContext';
// import PrivateRoute from './components/PrivateRoute';

function App() {
//   //init var
//   const [account,setAccount] = useState("")
//   const [fname,setfname] = useState("")
//   const [mname,setmname] = useState("")
//   const [lname,setlname] = useState("")

//   const featch = async () => {
//     const querySnapshot = await getDocs(collection(db, "Users"));
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//     });
//   }

//   useEffect (() => {
// featch();
//   },[])

//  const add = async (e) => {
//   e.preventDefault();
// //   await addDoc(doc(db, "Users"), {
// //     account_type: account,
// //     first_name: fname,
// //     last_name: lname,
// //     middle_name: mname,
// //   });
// //  }
// const docRef = await addDoc(collection(db, "Users"), {
//   account_type: account,
//     first_name: fname,
//     last_name: lname,
//     middle_name: mname,
// });
// console.log("Document written with ID: ", docRef.id);
// alert("Document written with ID: ", docRef.id)
// }

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='list' element={<List />} />
            <Route path='classrooms' element={<Classrooms />} />
          </Route>
          {/* Default route for unknown paths */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>

    
    {/* <Router>
      <AuthProvider>
        <Routes> */}
          {/* Public Routes */}
          {/* <Route path="/login" element={<login />} /> */}

          {/* Protected Routes (require authentication) */}
          {/* <PrivateRoute path="/" element={<home />} /> */}

          {/* Example of a route with a parameter */}
          {/* <PrivateRoute path="/classrooms" element={<classrooms />} /> */}

          {/* Example of a route with a parameter */}
          {/* <PrivateRoute path="/list" element={<list />} /> */}

          {/* Default route for unknown paths
          <Route path="*" element= {<div>404 Not Found</div>} />
        </Routes>
      </AuthProvider>
    </Router> */}

       {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>new code</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>  */}
      
      {/* <div className='stat'>comming soon</div>
      <div className='Add'>
        <form onSubmit={add}>
          <input type='text' placeholder='account type' onChange={(event) => {setAccount(event.target.value)}}></input>
          <input type='text' placeholder='fn' onChange={(event) => {setfname(event.target.value)}}></input>
          <input type='text' placeholder='mn' onChange={(event) => {setmname(event.target.value)}}></input>
          <input type='text' placeholder='lm' onChange={(event) => {setlname(event.target.value)}}></input>
          <button type='submit'>Add</button>
        </form>
      </div> */}
    </div>
  );
}

export default App;
