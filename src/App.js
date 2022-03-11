import './App.css';
import SideNav from './components/SideNav/SideNav'
import SignIn from './components/SignIn/SignIn'
import StudentRegistration from './components/StudentRegistration/StudentRegistration'
function App() {
  return (
    <div style={{ backgroundImage: `url('/background.jpg')` }}  className="App">
      <StudentRegistration/>
    </div>
  );
}

export default App;

/*
import "./App.css";
import Chat from "./components/Chat/Chat";
import ReactDOM from "react-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Coursescreen from "./components/Course_nav/Coursescreen"
import MyProfile from "./components/MyProfile/MyProfile";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from "./components/Schedule/Schedule";
export default function App() {
  return (
      <div
        style={{ backgroundImage: `url('/background.jpg')` }}
        className="App"
      >
        
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/profile" element={<MyProfile />} />

        <Route path="/schedule" element={<Schedule />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/course" element={<Coursescreen />} />
      </Routes>
    </BrowserRouter>
        </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
*/
