import './MyProfile.css'
import SideNav from "../SideNav/SideNav";
import AccountDetailsStudent from './AccountDetailsStudent/AccountDetailsStudent';
import ProfileSettings from './ProfileSettings/ProfileSettings';
function Dashboard() {
    return (
      <div class="container">
        <div class="sideNav">
          <SideNav />
        </div>
        <div class="main-content-dashboard">
          <div class="myProfile-Header">My Profile</div>
          <div class="content">
                <div class="MyProfileAccountContainer">
                    <AccountDetailsStudent/>
                </div>
                <div class="MyProfileSettingsContainer">
                    <ProfileSettings/>
                </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  