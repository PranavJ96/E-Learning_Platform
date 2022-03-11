import "./Schedule.css";
import SideNav from "../SideNav/SideNav";
function Schedule() {
  return (
    <div class="container">
      <div class="sideNav">
        <SideNav  pageName="schedule"/>
      </div>
      <div class="main-content-dashboard">
        <div class="chat-Header">Schedule</div>
        <div class="scheduleContent">
          <img src="/schedule.jpg" className="scheduleImage" alt="CalendarImage"/>
        </div>
      </div>
    </div>
  );
}
export default Schedule;
