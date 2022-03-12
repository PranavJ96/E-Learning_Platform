import "./Coursedetails.css";
import SideNav from "../SideNav/SideNav";
import AssignmentUpload from "./AssignmentUpload/AssignmentUpload";

const Coursedetails = () => {
    return (

        <div className="Screen_Coursedetails">
            <SideNav />
            <div className="Coursestyle">
                <div className="heading_details">Discrete Mathematics</div>
                <div className="coursedetails">
                    <iframe className="Coursedetailsimage_style" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                    <div className="subheading_details">Course Details</div>
                    <div className="Text_style">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also</div>
                    <div className="subheading_details">Resources and Materials</div>
                    <div className="Assignments_list">
                   <AssignmentUpload AssignmentName = "Assignment for Unit 1" path="/"/>
                   <AssignmentUpload AssignmentName = "Assignment for Unit 2" />
                   <AssignmentUpload AssignmentName = "Assignment for Unit 3" />
                </div>
                </div>
            </div>
            <div className="TeacherandUpload">
            <div className="teachersdetails">
                <div className="Teacher_Heading">Meet Your Professor</div>
                <img className="profilestyle" src="/teacher.jpg" />
                <div className="Teacher_Heading2">Prof. Dr. Saketh Jadhav</div>
                <div className="Teacher_Heading3">HOD Mathematics</div>
                <div className="Message_Teacher">
                <button className="button">Message</button>
                </div>
            </div>
            <div className="uploadCourse"> 
            <div className="Upload_Content">
            <div className="UploadFiles">Drag Files Here</div>
            <div className="UploadFiles_OR">Or</div>
            
            <button className="button">Upload Files</button>
                </div>
            </div>
            </div>

        </div>


    );
};

export default Coursedetails;

