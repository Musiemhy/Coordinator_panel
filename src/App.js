import './App.css';
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Classrooms from "./pages/classrooms/Classrooms"
import { collection, getDocs } from "firebase/firestore";
import { db } from './Firebase/Firebase'; 
import { useEffect, useState, useContext } from 'react';
import { doc, addDoc } from "firebase/firestore"; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {AuthContext} from "./components/context/AuthContext"
import Single from './pages/single/Single';
import Register from './pages/Register/Register';

function App() {

const {currentUser} = useContext(AuthContext)

const RequireAuth = ({children}) => {
  return currentUser ? children : <Navigate to="/login" />;
}

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/'>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
            <Route index element={<RequireAuth> <Home /> </RequireAuth>} />
            <Route path='list' element={<RequireAuth> <List /> </RequireAuth>} />
            <Route path='single' element={<RequireAuth> <Single /> </RequireAuth>} />
            <Route path='classrooms' element={<RequireAuth> <Classrooms /> </RequireAuth>} />
          </Route>
          {/* Default route for unknown paths */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
