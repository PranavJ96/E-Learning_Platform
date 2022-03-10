import "./ProfileSettings.css";
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
function ProfileSettings() {
  return (
    <div class="ProfileSettingsContainer">
      <div class="EditProfileHeader">Edit Profile <EditIcon fontSize="small"/></div>
      <div class="EditProfileTeacherImage">
        <img src="/teacher.jpg" alt="Profile_Picture" class="profilePicEdit" />
      </div>

      <div class="profileSettingsEditTwoInputs1">
        <input class="editUserProfileInputBox" placeholder="First Name" />
        <input class="editUserProfileInputBox" placeholder="Last Name" />
      </div>
      <div>
        <input class="editUserProfileInputBoxEmail" placeholder="Email Address" />
      </div>
      <div class="editProfileChangePasswordHeader">Change Password</div>
      <div>
        <input class="editUserProfileInputBox" placeholder="Old Password" />
      </div>
      <div class="profileSettingsEditTwoInputs2">
        <input class="editUserProfileInputBox" placeholder="New Password" />
        <input class="editUserProfileInputBox" placeholder="Confirm Password" />
      </div>
      <div class="editUserProfileButtons">
        <Button className="EditaccountDetailButton1">Save Profile</Button>
        <Button className="EditaccountDetailButton2">Cancel</Button>
      </div>
    </div>
  );
}
export default ProfileSettings;
