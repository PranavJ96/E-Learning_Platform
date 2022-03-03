import "./Dashboard.css";
import MyCourses from "./MyCourses/MyCourses";
import MyDeadlines from "./MyDeadlines/MyDeadlines";
import MyLectures from "./MyLectures/MyLectures";
import MyResults from "./MyResults/Myresults";
import SideNav from "../SideNav/SideNav";
function Dashboard() {
  return (
    <div class="container">
      <div class="sideNav">
        <SideNav />
      </div>
      <div class="main-content-dashboard">
        <div class="dashboard-Header">Dashboard</div>
        <div class="content">
          <div class="dashboard-components">
            <MyCourses />
          </div>
          <div class="dashboard-components">
            <MyDeadlines />
          </div>
          <div class="dashboard-components">
            <MyLectures />
          </div>
          <div class="dashboard-components">
            <MyResults />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
