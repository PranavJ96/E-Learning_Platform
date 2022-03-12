import "./AssignmentUpload.css"

const AssignmentUpload = ({ AssignmentName, path }) => {
    return (
        <div >
        <div className="Assignments_Download">
            <div className="Assignments"> {AssignmentName}</div>
           <div className="Buttons_Assignment">
            <button  className="button_Assignments">View</button>
            <button href={path} className="button_Assignments">Download</button>
            </div>
            </div>
            </div>
    );
};
export default AssignmentUpload;
