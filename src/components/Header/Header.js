import "./Header.css";
import Button from '@material-ui/core/Button';

const Header = () => {
    function home(){
        window.location = 'http://localhost:3000/';
    }
    return ( 
    <div className = "Header" >
        <div>
        <img onClick={home} className = "imagestyle2" alt="Logo" src = "./logo1.png" />
        </div>

        <div className = "Text" >
        E - Shikshan


        <div className = "TagLine" >
        Begin your learning journey from here </div> 
        </div>
        <div className = "Button" >
        <Button href="/login" className = "button1" >
        SignIn / SignUp </Button> </div> </div>

    );
};

export default Header;