import React,{useState} from "react";
import "./SignIn.css";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import Header from "../Header/Header";

 
  export default function Form() {
     //States for SignIn and SignUp
    const [UserName, setUsername] = React.useState("");
    const [Pass, setPass] = React.useState("");
    const [FirstName, setFirstName] = React.useState("");
   const [LastName, setLastName] = React.useState("");
   const [EmailID, setEmailID] = React.useState("");
   const [Password, setPassword] = React.useState("");
   const [ConfirmPassword, setCPassword] = React.useState("");

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
            Axios.post('http://localhost:5000/api/login',{Name:UserName,Password:Pass}).then((response)=>{
               if(response.data.message){
                  setError(true);
               }
               else{
                  console.log(response.data[0].ID)
                  localStorage.setItem('userType', response.data[0].UserType)
                  setError(false);
                  window.location = 'http://localhost:3000/dashboard';
               }
            });
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
            <h4>The login credentials are incorrect.</h4>
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
         <div>
         <div className="signinHeader">
            <Header/>
         </div>
         <div class="vertical"></div>
         <div className="section">
         <div className="section-align">
            <div className="Section-headings">
               <h1>Sign In</h1>
            </div>
               <form>
                  <div className="label-align">
                  <div class="labelprops">
                  <label className="signinlabel">UserName</label>
                  </div>
                  <div class="inputprops">
                  <input onChange={handleUsername} className="input"
                  value={UserName} type="username" />
                  </div>
                  </div>
                  <div className="label-align">
                  <div class="labelprops">  
                  <label className="signinlabel">Password</label>
                  </div>
                  <div class="inputprops">
                  <input onChange={handlePass} className="input"
                  value={Pass} type="password" />
                  </div>
                  </div>
                  <div class="BtnText-align">
                  <Button onClick={handleSignIn} className="btnSignIn" type="signin">
                     Sign In</Button>
                     </div>
                  <div class="forgotPassword">Forgot Password ?</div>
               </form>
               <div className="messages">
               {errorMessage()}
               {successMessage()}
               </div>
               <div className="Google-label-align">
                   <img src="/google.png" alt="Google_Logo" className="ImageProps"></img>
                  <label className="Google-label">Sign In with Google</label> 
               </div>
            </div>     
            
            <div className="section-align">
            <div className="Section-headings">
               <h1>Sign Up</h1>
            </div>
               <form>
                  <div class="label-align">
                  <div class="labelprops"> 
                  <label className="signuplabel">FirstName</label>
                  </div>
                  <div class="inputprops">
                  <input onChange={handleFirstName} className="input"
                  value={FirstName} type="firstname" />
                  </div>
                  </div>
                  <div class="label-align">
                  <div class="labelprops"> 
                  <label className="signuplabel">LastName</label>
                  </div>
                  <div class="inputprops">
                  <input onChange={handleLastName} className="input"
                  value={LastName} type="lastname" />
                  </div>
                  </div>
                  <div class="label-align">
                  <div class="labelprops"> 
                  <label className="signuplabel">Email ID</label>
                  </div>
                  <div class="inputprops">
                  <input onChange={handleEmailID} className="input"
                  value={EmailID} type="lastname" />
                  </div>
                  </div>
                  <div class="label-align">
                  <div class="labelprops"> 
                  <label className="signuplabel">Password</label>
                  </div>
                  <div class="inputprops">
                  <input onChange={handlePassword} className="input"
                  value={Password} type="password" />
                  </div>
                  </div>
                  <div class="label-align">
                  <div class="labelprops">
                  <label className="signuplabel">Confirm Password</label>
                  </div>
                  <div class="inputprops">
                  <input onChange={handleConfirmPassword} className="input"
                  value={ConfirmPassword} type="password" />
                  </div>
                  </div>
                  <div class="BtnText-align">
                  <Button onClick={handleAccountCreation} className="btn" 
                  type="createaccount">Create Account</Button>
                  </div>
               </form>
               <div className="messages">
               {errorMessage1()}
               {successMessage1()}
               </div>
            </div> 
            </div> 
            </div>    
      );
  }
