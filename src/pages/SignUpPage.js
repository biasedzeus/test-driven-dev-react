 import React from 'react'
 
 function SignUpPage() {
     return  <div>
         <h1>Sign Up</h1>
         <label htmlFor="username">UserName</label>
         <input id="username" type="text"/>
         <label htmlFor="email">Email</label>
         <input id='email'   type="text"/>
         <label htmlFor="password">Password</label>
         <input id='password'   type="password"/>
         <label htmlFor="password-repeat">Password Repeat</label>
         <input id='password-repeat'   type="password"/>

     </div>
     
 }
 
 export default SignUpPage
 