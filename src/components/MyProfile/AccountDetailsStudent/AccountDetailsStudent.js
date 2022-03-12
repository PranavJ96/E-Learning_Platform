import "./AccountDetailsStudent.css";
import Trophy from "@material-ui/icons/EmojiEvents";
import Button from "@material-ui/core/Button";
import { orange } from "@material-ui/core/colors";
function AccountDetailsStudent() {
  return (
    <div class="accountDetailsContainer">
      <img src="/teacher.jpg" alt="Profile_Picture" class="accountDetailsProfilePic" />
      <div class="accountDetailsName">Pranav Jaya Nayak</div>
      <div class="accountDetails_coursesData">
        <div>
          <div class="accountDetailsCoursesCount">
            <div class="accountDetailsCoursesCountNumber">1</div>
          </div>
          <div class="accountDetailsCoursesDetails">Courses in Progress</div>
        </div>
        <div>
          <div class="accountDetailsCoursesCount">
            <div class="accountDetailsCoursesCountNumber2">5</div>
          </div>
          <div class="accountDetailsCoursesDetails">Courses Completed</div>
        </div>
      </div>
      <div class="accountDetails_LatestAchievements">Latest Achievements</div>
      <div class="accountDetailsCoursesAchievements">
        <Trophy fontSize="large" style={{ color: orange[700] }}/>
      </div>
        <Button className="accountDetailButton">Delete Account</Button>
    </div>
  );
}

export default AccountDetailsStudent;
