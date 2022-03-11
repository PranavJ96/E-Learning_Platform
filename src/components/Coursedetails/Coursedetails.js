import "./Coursedetails.css";
import SideNav from "../SideNav/SideNav";

const Coursedetails = () => {
return (
    
    <div  className="Screen_Coursedetails">
       <SideNav/>
       <div className="Coursestyle">
    <div className="heading_details">Discrete Mathematics</div>
    <div className="coursedetails">
    <img className="Coursedetailsimage_style" src="/ss.png" />
    <div className="subheading_details">Course Details</div>
    <div className="Text_style">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also</div>
    <div className="subheading_details">Resources and Materials</div>
    
    </div>
    
    </div>
    <div className="teachersdetails">
    <img className="profilestyle" src="/teacher.jpg" />
    </div>
    

    </div>
    

);
};

export default Coursedetails;

