import "./Coursescreen.css";
import Courseoptions from "./courseoptions/Courseoptions";
import SideNav from "../SideNav/SideNav";
const Coursescreen = () => {
    function addCourse(){
        window.location.href='/addcourse';
    };
    return (
        <div className="Screen">
            <div className="SideNavstyle" >
            <SideNav/>
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
            <Courseoptions courseName = "Java Programming" professorName = "Mr Java Developer" classDetails = "k1501" classDate = "August-December" courseStatus = "Ongoing" />
            <Courseoptions courseName = "Discrete Mathematics" professorName = "Hackerman" classDetails = "k1501" classDate = "August-December" courseStatus = "Ongoing" />
             </div>
             </div>
            
        </div>
    );
};
export default Coursescreen;