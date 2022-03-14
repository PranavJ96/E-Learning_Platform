import "./ClassProgress.css"


const ClassProgress = ({ CourseName, ClassName, Duration, path, isSelected}) => {
    console.log(isSelected)
    return (
        <div >
        <div className= {isSelected===false ? "Course_List": "Courselistselected"}  >
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
