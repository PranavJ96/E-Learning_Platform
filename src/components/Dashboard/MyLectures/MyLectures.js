import "./MyLectures.css";
import WhatshotIcon from "@material-ui/icons/Whatshot";
function MyLectures() {
  return (
    <div class="MyDeadlineContainer">
      <div class="MyDeadlineHeader">My Lectures Today</div>
      <div class="deadlineDetails">
        <div class="lectureDetailsLogo">
        <img src="/chemistry.jpg" alt="subjectImage" class="subjectIconStyle" />
        </div>
        <div class="lectureDetailsText">
            Chemistry
        </div>
        <div class="lectureDetailsNavigate">08:00 AM to 10:00 AM</div>
      </div>
      <div class="deadlineDetails">
        <div class="lectureDetailsLogo">
        <img src="/geography.jpg" alt="subjectImage" class="subjectIconStyle" />
        </div>
        <div class="lectureDetailsText">
            Geography
        </div>
        <div class="lectureDetailsNavigate">10:00 AM to 12:00 AM</div>
      </div>
    </div>
  );
}

export default MyLectures;
