import "./Coursedetails.css";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import SideNav from "../SideNav/SideNav";
import AssignmentFiles from "./AssignmentFiles/AssignmentFiles";

const Coursedetails = () => {
  const [files, setFiles] = useState([]);
  let numberOfFiles = 1;
  let userType = localStorage.getItem("userType");
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*,.pdf",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  
    const fileUploaded = files.map((file) => {
      if (file.name !== undefined) {
        numberOfFiles += 1;
      }
    });
  if(userType==="1"){
    return (
      <div className="Screen_Coursedetails">
        <SideNav pageName="course" />
        <div className="Coursestyle">
          <div className="heading_details">Discrete Mathematics</div>
          <div className="coursedetails">
          <iframe className="Coursedetailsimage_style" src="https://www.youtube.com/embed/XQoLVl31ZfQ" title="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="subheading_details">Course Details</div>
            <div className="Text_style">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also
            </div>
            <div className="subheading_details">Resources and Materials</div>
            <div className="Assignments_list">
              <AssignmentFiles numberOfItems={numberOfFiles} />
            </div>
          </div>
        </div>
        <div className="TeacherandUpload">
          <div className="teachersdetails">
            <div className="Teacher_Heading">Meet Your Professor</div>
            <img alt="teacherImage" className="profilestyle" src="/teacher.jpg" />
            <div className="Teacher_Heading2">Prof. Dr. Saketh Jadhav</div>
            <div className="Teacher_Heading3">HOD Mathematics</div>
            <div className="Message_Teacher">
              <button className="button">Message</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="Screen_Coursedetails">
        <SideNav pageName="course" />
        <div className="Coursestyle">
          <div className="heading_details">Discrete Mathematics</div>
          <div className="coursedetails">
          <iframe className="Coursedetailsimage_style" src="https://www.youtube.com/embed/XQoLVl31ZfQ" title="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <div className="subheading_details">Course Details</div>
            <div className="Text_style">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also
            </div>
            <div className="subheading_details">Resources and Materials</div>
            <div className="Assignments_list">
              <AssignmentFiles numberOfItems={numberOfFiles} />
            </div>
          </div>
        </div>
        <div className="TeacherandUpload">
        <div {...getRootProps()} className="uploadCourse">
            <div className="Upload_Content">
              <div className="UploadFiles">Drag Files Here</div>
              <div className="UploadFiles_OR">Or</div>
              <div {...getInputProps()}>{fileUploaded}</div>
              <button className="button">Upload Files</button>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
};

export default Coursedetails;
