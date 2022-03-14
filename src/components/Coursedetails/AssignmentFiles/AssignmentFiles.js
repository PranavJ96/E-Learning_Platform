
import AssignmentUpload from "../AssignmentUpload/AssignmentUpload";
const AssignmentFiles = ({ numberOfItems }) => {
    if(numberOfItems === 1){
        return( <div>
        <AssignmentUpload AssignmentName = "Assignment for Unit 1" path="/"/>
        </div>);
      }
      else if(numberOfItems === 2){
        return(<div>
        <AssignmentUpload AssignmentName = "Assignment for Unit 1" path="/"/>
        <AssignmentUpload AssignmentName = "Discrete Notes" path="/discreteNotes.pdf"/>
        </div>);
      }
      else {
        return(<div>
        <AssignmentUpload AssignmentName = "Assignment for Unit 1" path="/"/>
        <AssignmentUpload AssignmentName = "Discrete Notes" path="/discreteNotes.pdf"/>
        <AssignmentUpload AssignmentName = "Discrete Notes" path="/discreteNotes.pdf"/>
        </div>);
      }
    }
export default AssignmentFiles;
