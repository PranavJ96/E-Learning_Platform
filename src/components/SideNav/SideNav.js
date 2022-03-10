import "./SideNav.css";
import NavLink from "./NavLink/NavLink";
const SideNav = () => {
  return (
    <div class="nav-container">
      <div class="logoImg">
        <img src="/logo.png" alt="logo" width="100px" />
      </div>
      <div class="navButtons">
        <NavLink value="Dashboard" path="/" isActive="1" isSubmit="0" />
      </div>
      <div class="navButtons">
        <NavLink value="Course" path="/course" isActive="0" isSubmit="0" />
      </div>
      <div class="navButtons">
        <NavLink value="Student" path="/" isActive="0" isSubmit="0" />
      </div>
      <div class="navButtons">
        <NavLink value="Chat" path="/chat" isActive="0" isSubmit="0" />
      </div>
      <div class="navButtons">
        <NavLink value="Schedule" path="/schedule" isActive="0" isSubmit="0" />
      </div>
      <div class="navButtons">
        <NavLink value="Profile" path="/profile" isActive="0"  isSubmit="0"/>
      </div>
      <div class="signoutButton">
        <NavLink value="SignOut" path="/" isActive="1" isSubmit="1"/>
      </div>
    </div>
  );
};
export default SideNav;
