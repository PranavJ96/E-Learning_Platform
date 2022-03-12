import "./Courseoptions.css";

function changeroute() {
    console.log("hello");
    window.location.href='/coursedetails';
}
const Courseoptions = ({ courseName, professorName, classDetails, classDate, courseStatus }) => {
    return (



        <div onClick={changeroute} className="courseblock">
            <div className="coursename">
                <img className="imagestyle_CourseIcon" src="/computer.png" alt="CoursesImages" />
                <h3 className="textstyle_CourseName">{courseName}</h3>
            </div>
            <span className="textstyle_CourseDetails">By:  {professorName}</span>
            <span className="textstyle_CourseDetails">Class Name:  {classDetails}</span>
            <span className="textstyle_CourseDetails">Duration:  {classDate}</span>

            <div className="cousename">
                <span className="textstyle_Status">{courseStatus}</span>



            </div>

        </div>


    );
};
export default Courseoptions;
