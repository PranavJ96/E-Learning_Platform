import "./Coursescreen.css";
import Courseoptions from "./courseoptions/Courseoptions";
import SideNav from "../SideNav/SideNav";
const Coursescreen = () => {
    return (
        <div className="Screen">
            <div className="SideNavstyle" >
            <SideNav/>
            </div>
            <div className="coursedisplay">
            <span className="heading">My Courses</span>
            <Courseoptions courseName = "Java Programming" professorName = "Mr Java Developer" classDetails = "k1501" classDate = "August-December" courseStatus = "Ongoing" />
            
             </div>
            
        </div>
    );
};
export default Coursescreen;