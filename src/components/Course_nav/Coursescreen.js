import "./Coursescreen.css";
import Courseoptions from "./courseoptions/Courseoptions";
import SideNav from "../SideNav/SideNav";
import Axios from "axios";
import React,{useState} from "react";
const Coursescreen = () => {
    const [data,setdata] = useState([]);
    function addCourse(){
        window.location.href='/addcourse';
    };
    
    let userType = localStorage.getItem("userType");
    Axios.get('http://localhost:5000/api/courses').then((response)=>{
               if(response.data.message){
               }
               else{
                   setdata(response.data);
               }
            });
    if(userType==="1"){
        return (
            <div className="Screen">
                <div className="SideNavstyle" >
                <SideNav pageName="course"/>
                </div>
                <div className="coursedisplay">
                <div className="Headline"> 
                <div className="heading">My Courses</div>
               </div>
                <div className="Coursecards">
                {data.map((object, i) => <Courseoptions courseName = {object.Name} professorName = {object.CourseBy} classDetails = {object.ClassName} classDate = "August-December" courseStatus = "Ongoing" />)}
                 </div>
                 </div>
                
            </div>
        );
    }
    else{
        return (
            <div className="Screen">
                <div className="SideNavstyle" >
                <SideNav pageName="course"/>
                </div>
                <div className="coursedisplay">
                <div className="Headline"> 
                <div className="heading">My Courses</div>
                <div onClick={addCourse} className="Headline2">  
                <h3 className="Headline_courseadd">Click here to add a new Course</h3>
                <img className="imagestyle_Courseadd" src="/add.png" />
                </div >
               </div>
                <div className="Coursecards">
                {data.map((object, i) => <Courseoptions courseName = {object.Name} professorName = {object.CourseBy} classDetails = {object.ClassName} classDate = "August-December" courseStatus = "Ongoing" />)}
                 </div>
                 </div>
                
            </div>
        );
    }
};
export default Coursescreen;