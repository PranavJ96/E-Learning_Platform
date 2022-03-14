import "./Dashboard.css";
import MyCourses from "./MyCourses/MyCourses";
import MyDeadlines from "./MyDeadlines/MyDeadlines";
import MyLectures from "./MyLectures/MyLectures";
import MyResults from "./MyResults/Myresults";
import SideNav from "../SideNav/SideNav";
import {useState} from 'react';
import ClassProgress from "../Dashboard/ClassProgress/ClassProgress";
import Studentprogress from "../subjectprogress/Subjectprogress";
let userType = localStorage.getItem("userType");
let Dashboard;
if(userType==="1"){
  Dashboard = () => {
  return (
    <div class="container">
      <div class="sideNav">
        <SideNav  pageName="dashboard"/>
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
}
else{
  Dashboard = () => {
    const [PageNumber, setPageNumber] = useState();
    function studentProgressSelection(pageNumber){
      setPageNumber(pageNumber)
      console.log(PageNumber)
    }
      return (
        <div class="container">
          <div class="sideNav">
            <SideNav  pageName="dashboard"/>
          </div>
          <div class="main-content-dashboard_Teacher">
            <div class="dashboard-Header">Dashboard</div>
            <div className="Class_Progress">
              <div className="Progress_heading">Class Progress Monitor</div>
              <div className="Progress_subheading">Check progress of classes you teach</div>
              <div onClick={() =>studentProgressSelection(1)}>
                       <ClassProgress CourseName = "Discrete Mathematics" ClassName="K1501" Duration="December-April" path="/"/>
              </div>
              <div onClick={() =>studentProgressSelection(2)}>
                       <ClassProgress CourseName = "Assignment for Unit 1" ClassName="K1501" Duration="December-April" path="/"/>
              </div>
              <div onClick={() =>studentProgressSelection(3)}>
                       <ClassProgress CourseName = "Assignment for Unit 1" ClassName="K1501" Duration="December-April" path="/"/>
              </div>
              <div onClick={() =>studentProgressSelection(4)}>
                       <ClassProgress CourseName = "Assignment for Unit 1" ClassName="K1501" Duration="December-April" path="/"/>
              </div>
            </div>
          </div>
          <Studentprogress  PageNumber={PageNumber}/>
        </div>
      )
}
}

export default Dashboard;
