import "./Courseoptions.css";
const Courseoptions = ({courseName,professorName,classDetails,classDate,courseStatus}) => {
    return (
        
            <div className="nav-container2">
                <div className="coursename">
                    <img className="imagestyle" src="/computer.png" />
                    <h2 className="textstyle">{courseName}</h2>
                </div>
                <span className="textstyle3">{professorName}</span>
                <span className="textstyle3">{classDetails}</span>
                <span className="textstyle3">{classDate}</span>

                <div className="cousename">
                    <span className="textstyle4">{courseStatus}</span>



                </div>

            </div>

     
    );
};
export default Courseoptions;
