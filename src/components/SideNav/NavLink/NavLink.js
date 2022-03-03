import './NavLink.css';
import Button from '@material-ui/core/Button';
import WhatshotIcon from '@material-ui/icons/Whatshot';
const NavLink = ({value,path,isActive, isSubmit}) => {
    return(
        <div>
           <Button className={isSubmit==="1" ? "submitButton":isActive==="1" ? "navActiveButton":"navButton"} href={`${path}`} startIcon={<WhatshotIcon />}>
                {value}
            </Button>
        </div>
    );
};
export default NavLink;