import "./Coursescreen.css";
import Courseoptions from "./courseoptions/Courseoptions";
import SideNav from "../SideNav/SideNav";
const Coursescreen = () => {
    return (
        <div className="Screen">
            <div className="SideNavstyle" >
            <SideNav/>
            </div>
            <div>
                <h1 className="heading">My Courses</h1>
            <div className="Screen">
            <Courseoptions courseName = "fjhygdf" professorName = "ksjxsvkjsb" classDetails = "jsbdg" classDate = "dksjfbg" courseStatus = "fkjb" />
            <Courseoptions courseName = "fjhygdf" professorName = "ksjxsvkjsb" classDetails = "jsbdg" classDate = "dksjfbg" courseStatus = "fkjb" />
            </div>
            </div>
        </div>
    );
};
export default Coursescreen;