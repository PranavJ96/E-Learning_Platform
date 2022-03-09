import React,{useState} from "react";
import "./SignIn.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

 
  export default function Form() {
     //States for SignIn and SignUp
    const [UserName, setUsername] = React.useState(" ");
    const [Pass, setPass] = React.useState(" ");
    const [FirstName, setFirstName] = React.useState(" ");
   const [LastName, setLastName] = React.useState(" ");
   const [EmailID, setEmailID] = React.useState(" ");
   const [Password, setPassword] = React.useState(" ");
   const [ConfirmPassword, setCPassword] = React.useState(" ");

    //States for checking errors
    const [SignIn, setSignIn] = useState(false);
    const [error, setError] = useState(false);

      const handleUsername = (e) => {
         setUsername(e.target.value);
         setSignIn(false);
      };
      const handlePass = (e) => {
         setPass(e.target.value);
         setSignIn(false);
      };
      const handleSignIn = (e) => {
         e.preventDefault();
         if(UserName === '' || Pass === '')
         {
            setError(true);
         } else {
            setSignIn(true);
            setError(false);
         }
      
      };

      // Showing user successfully Signed In
      const successMessage = () => {
         return (
            <div className="success"
            style={{
            display: SignIn ? '' : 'none',
         }}>
            <h4>Successfully Signed In</h4>
            </div>
         );
      };

      // Showing if there is any error
      const errorMessage = () => {
         return(
         <div className="error"
         style={{
          display: error ? '' : 'none',
         }}>
            <h4>Please enter both username and password</h4>
            </div>
         );
      };

      //States for checking errors
    const [CreateAccount, setAccountCreation] = useState(false);
    const [Accounterror, setAccountError] = useState(false);

      const handleFirstName = (e) => {
         setFirstName(e.target.value);
         setAccountCreation(false);
      };
      const handleLastName = (e) => {
         setLastName(e.target.value);
         setAccountCreation(false);
      };
      const handleEmailID = (e) => {
         setEmailID(e.target.value);
         setAccountCreation(false);
      };
      const handlePassword = (e) => {
         setPassword(e.target.value);
         setAccountCreation(false);
      };
      const handleConfirmPassword = (e) => {
         setCPassword(e.target.value);
         setAccountCreation(false);
      };
      const handleAccountCreation = (e) => {
         e.preventDefault();
         if(FirstName === '' || EmailID === '' || Password === '' || ConfirmPassword === '')
         {
            setAccountError(true);
         } else {
            setAccountCreation(true);
            setAccountError(false);
         }
      
      };

      // Showing user successfully Signed In
      const successMessage1 = () => {
         return (
            <div className="success"
            style={{
            display: CreateAccount ? '' : 'none',
         }}>
            <h4>Account successfully created</h4>
            </div>
         );
      };

      // Showing if there is any error
      const errorMessage1 = () => {
         return(
         <div className="error"
         style={{
          display: Accounterror ? '' : 'none',
         }}>
            <h4>Please enter all the details necessary for account creation</h4>
            </div>
         );
      };

      return(
         <div className="section">
         <div className="section-align">
            <div>
               <h1>Sign In</h1>
            </div>
               <form>
                  <label className="label">UserName</label>
                  <input onChange={handleUsername} className="input"
                  value={UserName} type="username" />

                  <label className="label">Password</label>
                  <input onChange={handlePass} className="input"
                  value={Pass} type="password" />

                  <br></br>
                  <Button onClick={handleSignIn} className="btn" type="signin">
                     Sign In</Button>

               </form>
               <div className="messages">
               {errorMessage()}
               {successMessage()}
               </div>
            </div>     
            
            <div className="section-align">
            <div>
               <h1>Sign Up</h1>
            </div>
               <form>
                  <label className="label">FirstName</label>
                  <input onChange={handleFirstName} className="input"
                  value={FirstName} type="firstname" />

                  <label className="label">LastName</label>
                  <input onChange={handleLastName} className="input"
                  value={LastName} type="lastname" />

                  <label className="label">Email ID</label>
                  <input onChange={handleEmailID} className="input"
                  value={EmailID} type="lastname" />

                  <label className="label">Password</label>
                  <input onChange={handlePassword} className="input"
                  value={Password} type="password" />

                  <label className="label">Confirm Password</label>
                  <input onChange={handleConfirmPassword} className="input"
                  value={ConfirmPassword} type="password" />

                  <br></br>
                  <Button onClick={handleAccountCreation} className="btn" 
                  type="createaccount">Create Account</Button>

               </form>
               <div className="messages">
               {errorMessage1()}
               {successMessage1()}
               </div>
            </div> 
            </div>     
      );
  }
