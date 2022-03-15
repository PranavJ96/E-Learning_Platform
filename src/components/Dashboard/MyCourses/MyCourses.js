import "./MyCourses.css";
import SubmitButton from "../../SubmitButton/SubmitButton";
import WhatshotIcon from "@material-ui/icons/Whatshot";
function MyCourses() {
  return (
    <div class="MyCourseContainer">
      <div class="MyCourseHeader">My Courses</div>
      <div class="courseDetails">
        <div class="courseDetailsLogo">
        <img src="/mathematics.jpg" alt="subjectImage" class="subjectIconStyle" />
        </div>
        <div class="courseDetailsText">
          <div>Discrete Mathematics</div>
          <div class="MyCourseProfName">By: Dr. Prof. Viswajith Nair</div>
        </div>
        <div class="courseDetailsNavigate">
          <SubmitButton value="View Course" path="/coursedetails" />
        </div>
      </div>
      <div class="courseDetails">
        <div class="courseDetailsLogo">
          
        <img src="/chemistry.jpg" alt="subjectImage" class="subjectIconStyle" />
        </div>
        <div class="courseDetailsText">
          <div>Chemistry</div>
          <div class="MyCourseProfName">By: Dr. Prof. Mohitosh Chaudry</div>
        </div>
        <div class="courseDetailsNavigate">
          <SubmitButton value="View Course" path="/coursedetails" />
        </div>
      </div>
      {/* <div class="courseDetails">
        <div class="courseDetailsLogo">
          <WhatshotIcon />
        </div>
        <div class="courseDetailsText">
          <div>Computer Science</div>
          <div class="MyCourseProfName">By: Dr. Prof. Shubham Choudhary</div>
        </div>
        <div class="courseDetailsNavigate">
          <SubmitButton value="View Course" path="/" />
        </div>
      </div>
      <div class="courseDetails">
        <div class="courseDetailsLogo">
          <WhatshotIcon />
        </div>
        <div class="courseDetailsText">
          <div>Geography</div>
          <div class="MyCourseProfName">By: Dr. Prof. Shubham Choudhary</div>
        </div>
        <div class="courseDetailsNavigate">
          <SubmitButton value="View Course" path="/" />
        </div>
      </div> */}
    </div>
  );
}

export default MyCourses;
