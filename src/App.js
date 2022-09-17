import './App.css';
import React,{useState} from 'react';
import {Routes, Route,useNavigate ,Navigate} from 'react-router-dom';
import { Login } from './Login';
import { Signin } from './Signin';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  return (
  <div>
    <div>
       
     <Routes>
       <Route  path="/signin"  element={<Signin/>}/>
       <Route  path="/Login"  element={<Login/>}/>
      <Route  path="/"  element={<RequiredAuth1><Login/></RequiredAuth1>}/>
      <Route  path="/jobs"  element={<RequiredAuth><Jobs/></RequiredAuth>}/>
       
     </Routes>
 </div>
 <Routes>
      
      
  </Routes>
 </div>
   
  )
}
function RequiredAuth1({children}){
 
  return <Navigate replace to ="/Login"/>       
  
}
function RequiredAuth({children}){
  const token = localStorage.getItem("token")
  return token ? children : <Navigate replace to ="/Login"/>       
  
}
function Jobs(){
  const [img, setImage]= useState()
  const [title, settitle]= useState()
  const [type, settype]= useState()
  const [acknow, setacknow]= useState(false)
  
  const navigate = useNavigate()
  const logout =()=>{
    localStorage.removeItem("token")
    navigate("/")
  }
  const submit=()=>{
       const data ={
        img,
        title,
        type
       }
       console.log(img)
       fetch("https://capstonebackend--q.herokuapp.com/jobs", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(data=>data.json()).then(data=>{
        if(data){
          
          setacknow(true)
          setTimeout(()=>{
            setacknow(false)
          },10000)
          setImage("");
          settitle("");
          settype("")
        }
      })
  }
  return(
    <>     
       <h3 className="text-center"><u>Update your Gallery</u>
       
       </h3>
        <div className="editing-container ">
          <div className="editing border">
          <TextField id="outlined-basic" value={img} onChange={e => setImage(e.target.value)} style={{ width: 200 }} label="Image" variant="outlined" />
          <TextField id="outlined-basic" value={title} onChange={e => settitle(e.target.value)} style={{ width: 200 }} label="Title" variant="outlined" />
          <TextField id="outlined-basic" value={type} onChange={e => settype(e.target.value)} style={{ width: 200 }} label="type" variant="outlined" />
          <Button variant="contained" onClick={() => submit()} style={{ width: 200 }}>Update</Button>
          <Button variant="contained" onClick={() => logout()} style={{ width: 200 }}>Logout</Button>
          <p class="font-weight-bold" style={{color:"green"}}>
          {acknow ? "updated":""}
          </p>
          </div> 
          
        </div>
        
    </>
  )

      
  
}

export default App;
