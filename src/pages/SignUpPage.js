 import React,{useState} from 'react'
 
 function SignUpPage() {
  
const [disabled, setDisabled] = useState(true);
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


    



     return  <div>
         <h1>Sign Up</h1>
         <label htmlFor="username">UserName</label>
         <input id="username" type="text"/>
         <label htmlFor="email">Email</label>
         <input id='email'   type="text"/>
         <label htmlFor="password">Password</label>
         <input id='password'   type="password" onChange={onChangePassword}/>
         <label htmlFor="password-repeat">Password Repeat</label>
         <input id='password-repeat'   type="password" onChange={onChangePasswordRepeat}/>
         <button disabled={disabled}>Sign Up</button>

     </div>
     
 }
 
 export default SignUpPage
 