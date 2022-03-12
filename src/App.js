import "./App.css";
import Chat from "./components/Chat/Chat";
import React, {Fragment} from 'react';
import ReactDOM from "react-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Coursescreen from "./components/Course_nav/Coursescreen";
import MyProfile from "./components/MyProfile/MyProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from "./components/Schedule/Schedule";
import Form from "./components/SignIn/SignIn";
import StudentRegistration from "./components/StudentRegistration/StudentRegistration";

export default function App() {
  // function requireAuth() {
  //   let userType = localStorage.getItem("userType");
  //   console.log(userType);
  //   if (userType !== "1" || userType !== "2") {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  return (
    <div style={{ backgroundImage: `url('/background.jpg')` }} className="App">
      <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path='/dashboard' element={<PrivateRoute/>}>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
          </Route>
          <Route exact path='/profile' element={<PrivateRoute/>}>
          <Route path="/profile" exact element={<MyProfile />} />
          </Route>
          <Route exact path='/schedule' element={<PrivateRoute/>}>
          <Route path="/schedule" exact element={<Schedule />} />
          </Route>
          <Route exact path='/chat' element={<PrivateRoute/>}>
          <Route path="/chat" exact element={<Chat />} />
          </Route>
          <Route exact path='/course' element={<PrivateRoute/>}>
          <Route path="/course" exact element={<Coursescreen />} />
          </Route>
          <Route path="/login" exact element={<Form />} />
          <Route path="/signup" exact element={<StudentRegistration />} />
        </Routes>
      </Fragment>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

