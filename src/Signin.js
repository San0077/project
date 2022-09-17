import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import back from './back.jpg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Signin() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const signup = () => {
    if (email, password !== "") {
      const data = {
        email,
        password,
      };
      fetch("https://capstonebackend--q.herokuapp.com/signin", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(data => {
        navigate("/login");
      });
    }
  };
  return (
    <>
      <div>
        <img src={back}></img>
        <div className="pic">
          <p class="text-center font-weight-bold">Sign In</p>
          <TextField id="outlined-basic" className="inputs"
            onChange={e => setemail(e.target.value)}
            label="Email" style={{ width: 200 }} type="Email" variant="outlined" /><br></br>
          <TextField id="outlined-basic" className="inputs"
            onChange={e => setpassword(e.target.value)}
            label="Password" style={{ width: 200 }} type="password" variant="filled" /><br></br>
          <Button variant="contained" onClick={() => signup()} className="inputs" style={{ width: 200 }}>SignIn</Button>

        </div>
      </div>
    </>
  );
}
