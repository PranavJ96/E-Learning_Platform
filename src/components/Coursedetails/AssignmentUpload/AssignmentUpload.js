import "./AssignmentUpload.css"
import { Link } from 'react-router-dom';

const AssignmentUpload = ({ AssignmentName, path }) => {
    return (
        <div >
        <div className="Assignments_Download">
            <div className="Assignments"> {AssignmentName}</div>
           <div className="Buttons_Assignment">
            <button  className="button_Assignments">View</button>
            <Link to={path} className="button_Assignments" target="_blank" download>Download</Link>
            </div>
            </div>
            </div>
    );
};
export default AssignmentUpload;
