import "./MyDeadlines.css";
import WhatshotIcon from "@material-ui/icons/Whatshot";
function MyDeadlines() {
  return (
    <div class="MyDeadlineContainer">
      <div class="MyDeadlineHeader">My Deadlines</div>
      <div class="deadlineDetails">
        <div class="deadlineDetailsLogo">
        <img src="/computer.jpg" alt="subjectImage" class="subjectIconStyle" />
        </div>
        <div class="deadlineDetailsText">
          <div>Computer Science</div>
          <div class="MyDeadlineDate">10.03.2022</div>
        </div>
        <div class="deadlineDetailsNavigate">Assignment Due<div class="deadlineDetailsRed"></div></div>
      </div>
    </div>
  );
}

export default MyDeadlines;
