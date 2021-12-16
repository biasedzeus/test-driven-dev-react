 import React,{useState} from 'react';
 import axios from 'axios';
 
 function SignUpPage() {
  
const [disabled, setDisabled] = useState(true);
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [passwordRepeat, setPasswordRepeat] = useState('');

  //  setTimeout(()=>{
  //    console.log("updating");
  //    setDisabled(false);

  //  },5000)
  function onChangePassword(event){
    const currentValue = event.target.value;
    setPassword(currentValue);
    setDisabled(currentValue !== passwordRepeat)

    

  }
  function onChangePasswordRepeat(event){
    const currentValue = event.target.value;
    setPasswordRepeat(currentValue);
    setDisabled(currentValue !== password)

  }


  function handleOnClick(event){
    event.preventDefault();
    const body = {
      username,
      email,
      password
    }

    axios.post('/api/1.0/users',body);

  }


    


     return  <div>
       <form>
            <h1>Sign Up</h1>
            <label htmlFor="username">UserName</label>
            <input value={username} onChange={e => setUsername(e.target.value)} id="username" type="text"/>
            <label htmlFor="email">Email</label>
            <input id='email'   type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input id='password'   type="password" onChange={onChangePassword}/>
            <label htmlFor="password-repeat">Password Repeat</label>
            <input id='password-repeat'   type="password" onChange={onChangePasswordRepeat}/>
            <button disabled={disabled} onClick={handleOnClick}>Sign Up</button>
         </form>
     </div>
     
 }
 
 export default SignUpPage
 