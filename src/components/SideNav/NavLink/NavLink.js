import './NavLink.css';
import Button from '@material-ui/core/Button';
import Chat from '@material-ui/icons/Chat';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Book from '@material-ui/icons/Book';
import DashboardRounded from '@material-ui/icons/DashboardRounded';
import AccountBox from '@material-ui/icons/AccountBox';
import Person from '@material-ui/icons/Person';
import LiveTv from '@material-ui/icons/LiveTv';
const NavLink = ({value,path,isActive, isSubmit}) => {
    return(
        <div>
           <Button className={isSubmit==="1" ? "submitButton":isActive==="1" ? "navActiveButton":"navButton"} href={`${path}`} startIcon={<LiveTv />}>
                {value}
            </Button>
        </div>
    );
};
export default NavLink;