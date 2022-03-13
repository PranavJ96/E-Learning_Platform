import React,{useState} from "react";
import "./AddCourse.css";
import Button from "@material-ui/core/Button";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";
import AttachFile from "@material-ui/icons/AttachFile";
//import FileUpload from "react-material-file-upload"
                /*
                <FileUpload value={CourseIcon} onChange={handleAttachments} />AttachFile
                */


export default function AddCourse() {
    //States for Adding a course
    
    const [CourseName, setCourseName] = React.useState(" ");
    const [ClassName, setClassName] = React.useState(" ");
    const [CourseDetails, setCourseDetails] = React.useState(" ");
    const [Schedule, setSchedule] = React.useState(" ");
    const [CourseIcon, setCourseIcon] = React.useState([]);
    const [StartDate, setStartDate] = React.useState(new Date());
    const [Options, setOptions] = React.useState(" ");

   //States for checking errors
    const [BtnAddCourse, setBtnAddCourse] = useState(false);
    const [AddCourseerror, setAddCourseerror] = useState(false);

    const handleCourseName = (e) => {
        setCourseName(e.target.value);
        setBtnAddCourse(false);
     };

    const handleClassName = (e) => {
        setClassName(e.target.value);
        setBtnAddCourse(false);
     };

    const handleCourseDetails = (e) => {
        setCourseDetails(e.target.value);
        setBtnAddCourse(false);
     };

    const handleSchedule = (e) => {
        setSchedule(e.target.value);
        setBtnAddCourse(false);
     };

     const handleStartDate = (date) => {
        setStartDate(date);
        setBtnAddCourse(false);
     };

     const handleAttachments = (e) => {
        setCourseIcon(e.target.value);
        setBtnAddCourse(false);
     };

    const handleOptions = (e) => {
        setOptions(e.target.value);
        setBtnAddCourse(false);
     };

    const handleAddCourses = (e) => {
        e.preventDefault();
        if(CourseName === '' || ClassName === '' || CourseDetails === '' || Schedule === '' || StartDate === '' || Options === '')
        {
            setAddCourseerror(true);
        } else {
            Axios.post('http://localhost:5000/api/addcourse',{Name:CourseName,ClassName:ClassName,CourseDetails:CourseDetails,CourseBy:localStorage.getItem('userName')}).then((response)=>{
                console.log(response)
               if(response.data.message){
               }
               else{
                  window.location = 'http://localhost:3000/course';
               }
            });
            setBtnAddCourse(true);
            setAddCourseerror(false);
        }
     
     };

      
// Showing user successfully registered
      const AddCoursesuccessMessage = () => {
        return (
           <div className="success"
           style={{
           display: BtnAddCourse ? '' : 'none',
        }}>
           <h4>Successfully added one course.</h4>
           </div>
        );
     };

// Showing if there is any error
     const AddCourseerrorMessage = () => {
        return(
        <div className="error"
        style={{
         display: AddCourseerror ? '' : 'none',
        }}>
           <h4>Could not add a course.Please check if all the fields are filled.</h4>
           </div>
        );
     };

     return(
        <div>
        <div className="align-CourseDetails">
        <div className="AddCourseHeading">
            <h1>Add a new Course</h1>
        </div>
        <form>
        <div className="label-align">
            <div class="labelprops">
                <label className="label">Name of the course</label>
            </div>
            <div class="inputprops">
                <input onChange={handleCourseName} className="input"
                    value={CourseName} type="text"/>
            </div>
            </div>
            <div className="label-align">
            <div class="labelprops">
                <label className="label">Class Name</label>
            </div>
            <div class="inputprops">
                <input onChange={handleClassName} className="input"
                    value={ClassName} type="text"/>
            </div>
            </div>
            <div className="label-align">
            <div class="labelprops">
                <label className="label">Course Details</label>
            </div>
            <div class="inputprops">
                <input onChange={handleCourseDetails} className="courseinput"
                    value={CourseDetails} type="text"/>
            </div>
            </div>
            <div className="label-align">
            <div class="labelprops">
                <label className="label">Schedule</label>
            </div>
            <div class="checkboxinput">
            <div class="checkboxspacing">
                <input onChange={handleSchedule} 
                    value="Weekdays" type="checkbox"/>Weekdays
            </div>
            <div class="checkboxspacing">
                <input onChange={handleSchedule}
                    value="Saturdays" type="checkbox"/>Saturdays
            </div>
            </div>
            </div>
            <div className="label-align">
            <div class="labelprops">
                <label className="label">Course Icon</label>
            </div>
            <div class="inputprops">
                <div className="attachIcon-Space">
                <AttachFile className="attachfiles"/>AttachFile
                </div>
            </div>
            </div>
            <div className="label-align">
                <div class="labelprops">
                    <label className="label">Start Date</label>
                </div>
                <div class="inputprops">
                    <Datepicker className="input" selected={StartDate} onChange={handleStartDate}
                    dateFormat="dd/MM/yyyy" placeholderText="dd/MM/yyyy"></Datepicker>
                </div>
            </div>
            <div className="label-align">
                <div class="labelprops">
                    <label className="label">Opting for</label>
                </div>
                <div class="radiobtninput">
                <div class="radiobtnspacing">
                <input name="Opting For" selected={Options} onChange={handleOptions} 
                value="Degree" type="radio"/>Degree
                </div>
                <div class="radiobtnspacing">
                <input name="Opting For" selected={Options} onChange={handleOptions} 
                value="Course" type="radio"/>Course
                </div>
                </div>
            </div>
            <div className="savebtn-align">
                <Button onClick={handleAddCourses} className="addCoursebtn"
                type="button">Add Course</Button>
            </div>
        </form>
        <div className="messages">
               {AddCourseerrorMessage()}
               {AddCoursesuccessMessage()}
        </div>
        </div>
        </div>
     );
};