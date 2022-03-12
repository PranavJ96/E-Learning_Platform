import "./App.css";
import Chat from "./components/Chat/Chat";
import React, {Fragment} from 'react';
import ReactDOM from "react-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Coursescreen from "./components/Course_nav/Coursescreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from "./components/Schedule/Schedule";
import Form from "./components/SignIn/SignIn";
import Coursedetails from "./components/Coursedetails/Coursedetails"
import MyProfile from "./components/MyProfile/MyProfile"
import AssignmentUpload from "./components/Coursedetails/AssignmentUpload/AssignmentUpload";
import LiveClass from "./components/LiveClass/LiveClass";
import Home from "./components/Home/Home";
import Student from "./components/Student/Student";
import StudentRegistration from "./components/StudentRegistration/StudentRegistration";
import AddCourse from "./components/AddCourse/AddCourse";
export default function App() {
  return (
    <div style={{ backgroundImage: `url('/background.jpg')` }} className="App">
      <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path='/dashboard' element={<PrivateRoute/>}>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
          </Route>
          <Route exact path='/liveclass' element={<PrivateRoute/>}>
            <Route exact path='/liveclass' element={<LiveClass/>}/>
          </Route>
          <Route exact path='/profile' element={<PrivateRoute/>}>
          <Route path="/profile" exact element={<MyProfile />} />
          </Route>
          <Route exact path='/student' element={<PrivateRoute/>}>
          <Route path="/student" exact element={<Student />} />
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
          <Route path="/coursedetails" exact element={<Coursedetails />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/signup" exact element={<StudentRegistration />} />
          <Route path="/addcourse" exact element={<AddCourse />} />
        </Routes>
      </Fragment>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

