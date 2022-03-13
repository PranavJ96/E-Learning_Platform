import "./SideNav.css";
import NavLink from "./NavLink/NavLink";
let userType = localStorage.getItem("userType");
let SideNav;
if(userType==="1"){
  SideNav = ({pageName}) => {
    let dashActive = "0";
    let courseActive = "0";
    let studentActive = "0";
    let liveClassActive = "0";
    let chatActive = "0";
    let scheduleActive = "0";
    let profileActive = "0";
    if(pageName==="dashboard"){
      dashActive = "1";
    }
    else if(pageName==="course"){
      courseActive = "1";
    }
    else if(pageName==="liveClass"){
      liveClassActive = "1";
    }
    else if(pageName==="Chat"){
      chatActive = "1";
    }
    else if(pageName==="schedule"){
      scheduleActive = "1";
    }
    else if(pageName==="profile"){
      profileActive = "1";
    }
    return (
      <div class="nav-container">
        <div class="logoImg">
          <img src="/logo.png" alt="logo" width="100px" />
        </div>
        <div class="navButtons">
          <NavLink value="Dashboard" path="/dashboard" isActive={dashActive} isSubmit="0" />
        </div>
        <div class="navButtons">
          <NavLink value="Course" path="/course" isActive={courseActive} isSubmit="0" />
        </div>
        <div class="navButtons">
          <NavLink value="Live Class" path="/liveclass" isActive={liveClassActive} isSubmit="0" />
        </div>
        <div class="navButtons">
          <NavLink value="Chat" path="/chat" isActive={chatActive} isSubmit="0" />
        </div>
        <div class="navButtons">
          <NavLink value="Schedule" path="/schedule" isActive={scheduleActive} isSubmit="0" />
        </div>
        <div class="navButtons">
          <NavLink value="Profile" path="/profile" isActive={profileActive}  isSubmit="0"/>
        </div>
        <div class="signoutButtonTeacher">
          <NavLink value="SignOut" path="/login" isActive="1" isSubmit="1"/>
        </div>
      </div>
    );
  };
}
else{
  SideNav = ({pageName}) => {
    let dashActive = "0";
    let courseActive = "0";
    let studentActive = "0";
    let liveClassActive = "0";
    let chatActive = "0";
    let scheduleActive = "0";
    let profileActive = "0";
    if(pageName==="dashboard"){
      dashActive = "1";
    }
    else if(pageName==="course"){
      courseActive = "1";
    }
    else if(pageName==="student"){
      studentActive = "1";
    }
    else if(pageName==="liveClass"){
      liveClassActive = "1";
    }
    else if(pageName==="Chat"){
      chatActive = "1";
    }
    else if(pageName==="schedule"){
      scheduleActive = "1";
    }
    else if(pageName==="profile"){
      profileActive = "1";
    }
    return (
      <div class="nav-container">
        <div class="logoImg">
          <img src="/logo.png" alt="logo" width="100px" />
        </div>
        <div class="navButtons">
          <NavLink value="Dashboard" path="/dashboard" isActive={dashActive} isSubmit="0" />
        </div>
        <div class="navButtons">
          <NavLink value="Course" path="/course" isActive={courseActive} isSubmit="0" />
        </div>
        <div class="navButtons">
          <NavLink value="Student" path="/student" isActive={studentActive} isSubmit="0" />
        </div>
        <div class="navButtons">
          <NavLink value="Live Class" path="/liveclass" isActive={liveClassActive} isSubmit="0" />
        </div>
        <div class="navButtons">
          <NavLink value="Chat" path="/chat" isActive={chatActive} isSubmit="0" />
        </div>
        <div class="navButtons">
          <NavLink value="Schedule" path="/schedule" isActive={scheduleActive} isSubmit="0" />
        </div>
        <div class="navButtons">
          <NavLink value="Profile" path="/profile" isActive={profileActive}  isSubmit="0"/>
        </div>
        <div class="signoutButtonTeacher">
          <NavLink value="SignOut" path="/login" isActive="1" isSubmit="1"/>
        </div>
      </div>
    );
  };
}
export default SideNav;
