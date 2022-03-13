import "./ClassProgress.css"


const ClassProgress = ({ CourseName, ClassName, Duration, path }) => {
    return (
        <div >
        <div className="Course_List">
            <img className="Courselist_icon" src="./computer.png"></img>
            <div className="Course_Titlelist">
            <div className="Course_Namelist"> {CourseName}</div>
            <div className="Course_NameDuration">
            <div className="Class_Namelist"> {ClassName}</div>
            <div className="Class_Namelist"> {Duration}</div>
            </div>
            
            </div>
            </div>
            </div>
    );
};
export default ClassProgress;
