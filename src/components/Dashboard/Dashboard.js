import './Dashboard.css';
import MyCourses from './MyCourses/MyCourses'
import SideNav from '../SideNav/SideNav'
function Dashboard() {
    return (
        <div class="container">
            <div class="sideNav">
                <SideNav/>
            </div>
            <div class="content" >
                <MyCourses/>
            </div>
        </div>
    );
  }
  
  export default Dashboard;