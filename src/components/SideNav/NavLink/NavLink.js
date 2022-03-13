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
    function Logout(){
        localStorage.removeItem('userType');
        localStorage.removeItem('userName');
    }
    if(value === "Dashboard"){
        return(
        <div>
           <Button className={isSubmit==="1" ? "submitButton":isActive==="1" ? "navActiveButton":"navButton"} href={`${path}`} startIcon={<DashboardRounded />}>
                {value}
            </Button>
        </div>
    );
    }
    else if(value === "Course"){
        return(
            <div>
               <Button className={isSubmit==="1" ? "submitButton":isActive==="1" ? "navActiveButton":"navButton"} href={`${path}`} startIcon={<Book />}>
                    {value}
                </Button>
            </div>
        );
    }
    else if(value === "Student"){
        return(
            <div>
               <Button className={isSubmit==="1" ? "submitButton":isActive==="1" ? "navActiveButton":"navButton"} href={`${path}`} startIcon={<Person />}>
                    {value}
                </Button>
            </div>
        );
    }
    else if(value === "Chat"){
        return(
            <div>
               <Button className={isSubmit==="1" ? "submitButton":isActive==="1" ? "navActiveButton":"navButton"} href={`${path}`} startIcon={<Chat />}>
                    {value}
                </Button>
            </div>
        );
    }
    else if(value === "Schedule"){
        return(
            <div>
               <Button className={isSubmit==="1" ? "submitButton":isActive==="1" ? "navActiveButton":"navButton"} href={`${path}`} startIcon={<CalendarToday />}>
                    {value}
                </Button>
            </div>
        );
    }
    else if(value === "Profile"){
        return(
            <div>
               <Button className={isSubmit==="1" ? "submitButton":isActive==="1" ? "navActiveButton":"navButton"} href={`${path}`} startIcon={<AccountBox />}>
                    {value}
                </Button>
            </div>
        );
    }
    else if(value === "Live Class"){
        return(
            <div>
               <Button className={isSubmit==="1" ? "submitButton":isActive==="1" ? "navActiveButton":"navButton"} href={`${path}`} startIcon={<LiveTv />}>
                    {value}
                </Button>
            </div>
        );
    }
    else{ return(
        <div>
           <Button className="submitButton" onClick={Logout} href={`${path}`} >
                {value}
            </Button>
        </div>
    );
    }
};
export default NavLink;