import './SubmitButton.css';
import Button from '@material-ui/core/Button';
const SubmitButton = ({value,path}) => {
    return(
        <div>
           <Button className="navSubButton" href={`${path}`}>
                {value}
            </Button>
        </div>
    );
};
export default SubmitButton;