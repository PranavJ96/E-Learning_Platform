import React,{useState} from "react";
import "./StudentRegistration.css";
import Button from "@material-ui/core/Button";

export default function StudentForm() {
    //States for Student Registration
    const [BirthDate, setBirthDate] = React.useState(" ");
    const [Gender, setGender] = React.useState(" ");
    const [HighestCourse, setHighestCourse] = React.useState(" ");
    const [CourseArea, setCourseArea] = React.useState(" ");
    const [FinalMarks, setFinalMarks] = React.useState(" ");
    const [LearningArea, setLearningArea] = React.useState(" ");
    const [Options, setOptions] = React.useState(" ");


   //States for checking errors
    const [BtnSave, setBtnSave] = useState(false);
    const [Saveerror, setSaveError] = useState(false);

    const handleBirthDate = (e) => {
        setBirthDate(e.target.value);
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

    const handleOptions = (e) => {
        setOptions(e.target.value);
        setBtnSave(false);
     };
};