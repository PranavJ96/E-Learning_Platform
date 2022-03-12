import React,{useState} from "react";
import "./StudentRegistration.css";
import Button from "@material-ui/core/Button";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function StudentRegistration(){
    //States for Student Registration
    const [BirthDate, setBirthDate] = React.useState(new Date());
    const [Gender, setGender] = React.useState(" ");
    const [HighestCourse, setHighestCourse] = React.useState(" ");
    const [CourseArea, setCourseArea] = React.useState(" ");
    const [FinalMarks, setFinalMarks] = React.useState(" ");
    const [LearningArea, setLearningArea] = React.useState(" ");
    const [Options, setOptions] = React.useState(" ");


   //States for checking errors
    const [BtnSave, setBtnSave] = useState(false);
    const [Saveerror, setSaveError] = useState(false);

    const handleBirthDate = (date) => {
        setBirthDate(date);
        setBtnSave(false);
     };
    
    const handleGender = (e) => {
        setGender(e.target.value);
        setBtnSave(false);
     };

    const handleHighestCourse = (e) => {
        setHighestCourse(e.target.value);
        setBtnSave(false);
     };

    const handleCourseArea = (e) => {
        setCourseArea(e.target.value);
        setBtnSave(false);
     };

    const handleFinalMarks = (e) => {
        setFinalMarks(e.target.value);
        setBtnSave(false);
     };

     const handleLearningArea = (e) => {
        setLearningArea(e.target.value);
        setBtnSave(false);
     };

    const handleOptions = (e) => {
        setOptions(e.target.value);
        setBtnSave(false);
     };

    const handleUserRegistration = (e) => {
        e.preventDefault();
        if(BirthDate === '' || Gender === '' || HighestCourse === '' || CourseArea === '' || LearningArea === '' || Options === '')
        {
            setSaveError(true);
        } else {
            setBtnSave(true);
            setSaveError(false);
        }
     
     };

      
// Showing user successfully registered
      const RegistrationsuccessMessage = () => {
        return (
           <div className="success"
           style={{
           display: BtnSave ? '' : 'none',
        }}>
           <h4>Successfully Registered In</h4>
           </div>
        );
     };

// Showing if there is any error
     const RegistrationerrorMessage = () => {
        return(
        <div className="error"
        style={{
         display: Saveerror ? '' : 'none',
        }}>
           <h4>Registration Failed.Please check if all the details are entered correctly</h4>
           </div>
        );
     };

     return(
         <div className="align-Details">
        <div className="registrationHeading">
            <h1>Student Registration</h1>
        </div>
        <form>
            <div className="label-align">
                <div class="labelprops">
                    <label className="label">BirthDate*</label>
                </div>
                <div class="inputprops">
                    <Datepicker className="input" selected={BirthDate} onChange={handleBirthDate}
                    dateFormat="dd/MM/yyyy" placeholderText="dd/MM/yyyy"></Datepicker>
                </div>
            </div>
            <div className="label-align">
                <div class="labelprops">
                    <label className="label">Gender*</label>
                </div>
                <div class="radioinput">
                <div class="radiobtnspacing">
                <input name="Gender" selected={Gender} onChange={handleGender} value="Male" type="radio"/>Male
                </div>
                <div class="radiobtnspacing">
                <input name="Gender" selected={Gender} onChange={handleGender} value="Female" type="radio"/>Female
                </div>
                <div class="radiobtnspacing">
                <input name="Gender" selected={Gender} onChange={handleGender} value="Other" type="radio"/>Other
                </div>
                </div>
            </div>
            <div className="label-align">
                <div class="labelprops">
                    <label className="label">Highest baccalaureate course*</label>
                </div>
                <div class="inputprops">
                    <input onChange={handleHighestCourse} className="input"
                    value={HighestCourse} type="text"/>
                </div>
            </div>
            <div className="label-align">
                <div class="labelprops">
                    <label required className="label">Area of baccalaureate*</label>
                </div>
                <div class="inputprops">
                    <input onChange={handleCourseArea} className="input"
                    value={CourseArea} type="text"/>
                </div>
            </div>

            <div className="label-align">
                <div class="labelprops">
                    <label className="label">Final marks in baccalaureate</label>
                </div>
                <div class="inputprops">
                    <input onChange={handleFinalMarks} className="input"
                    value={FinalMarks} type="text"/>
                </div>
            </div>
            
            <div className="label-align">
                <div class="labelprops">
                    <label className="label">Interested area of learning*</label>
                </div>
                <div class="inputprops">
                    <input onChange={handleLearningArea} className="input"
                    value={LearningArea} type="text"/>
                </div>
            </div>

            <div className="label-align">
                <div class="labelprops">
                    <label className="label">Opting for*</label>
                </div>
                <div class="radioinput">
                <div class="radiobtnspacing">
                <input name="Opting For" selected={Options} onChange={handleOptions} value="Degree" type="radio"/>Degree
                </div>
                <div class="radiobtnspacing">
                <input name="Opting For" selected={Options} onChange={handleOptions} value="Course" type="radio"/>Course
                </div>
                </div>
            </div>
            <div className="savebtn-align">
                <Button onClick={handleUserRegistration} className="savebtn"
                type="button">Save Details</Button>
            </div>
            <div className="asterisk-align">
                <h4>*Mandatory</h4>
            </div>
        </form>
        <div className="messages">
               {RegistrationerrorMessage()}
               {RegistrationsuccessMessage()}
        </div>
        </div>
     );

    };
