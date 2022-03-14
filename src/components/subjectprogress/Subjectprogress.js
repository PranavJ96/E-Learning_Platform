import './Subjectprogress.css';
import { Bar } from 'react-chartjs-2';

 const subjectprogress = ({ PageNumber }) => {
     if(PageNumber === 1){
        return (
           <div>
            <div className='container2'>
                 
                <img className='graph_progress' src='./graph.png'></img>
   
                <div className='highlow'>
                   <div className='Marks_subject'>
                   
                <img className="Courselist_icon2" src="./avatar.png"></img>
   
                <div className='Classrank'>
                <div className='highest_marks'>Highest Marks</div>
                <div>Tanmay Bhatt</div>
                
             </div>
             
            </div>
            
            <div className='Marks_subject'>
                <img className="Courselist_icon2" src="./avatar.png"></img>
               
   
                <div className='Classrank'>
                <div className='highest_marks'>Lowest Marks</div>
                <div>Shubam</div>
               
                </div>
               
             </div>
             
             </div>
   
            
             </div>
             <img  className='Ranks_image' src='./ranks.png'></img>
             </div>
       );
     }
     if(PageNumber === 2){
        return (
           <div>
            <div className='container2'>
                 
                <img className='graph_progress' src='./graph.png'></img>
   
                <div className='highlow'>
                   <div className='Marks_subject'>
                   
                <img className="Courselist_icon2" src="./avatar.png"></img>
   
                <div className='Classrank'>
                <div className='highest_marks'>Highest Marks</div>
                <div>Pranav Nayak</div>
                
             </div>
             
            </div>
            
            <div className='Marks_subject'>
                <img className="Courselist_icon2" src="./avatar.png"></img>
   
                <div className='Classrank'>
                <div className='highest_marks'>Lowest Marks</div>
                <div>Saurabh</div>
               
                </div>
               
             </div>
             
             </div>
   
            
             </div>
             <img  className='Ranks_image' src='./ranks.png'></img>
             </div>
       );
     }
     else if(PageNumber === 3){
        return (
           <div>
            <div className='container2'>
                 
                <img className='graph_progress' src='./graph.png'></img>
   
                <div className='highlow'>
                   <div className='Marks_subject'>
                   
                <img className="Courselist_icon2" src="./avatar.png"></img>
   
                <div className='Classrank'>
                <div className='highest_marks'>Highest Marks</div>
                <div>Smruthi Sudhir</div>
                
             </div>
             
            </div>
            
            <div className='Marks_subject'>
                <img className="Courselist_icon2" src="./avatar.png"></img>
   
                <div className='Classrank'>
                <div className='highest_marks'>Lowest Marks</div>
                <div>Harshini</div>
               
                </div>
               
             </div>
             
             </div>
   
            
             </div>
             <img  className='Ranks_image' src='./ranks.png'></img>
             </div>
       );
     }
     else{
        return (
           <div>
            <div className='container2'>
                 
                <img className='graph_progress' src='./graph.png'></img>
   
                <div className='highlow'>
                   <div className='Marks_subject'>
                   
                <img className="Courselist_icon2" src="./avatar.png"></img>
   
                <div className='Classrank'>
                <div className='highest_marks'>Highest Marks</div>
                <div>Saketh</div>
                
             </div>
             
            </div>
            
            <div className='Marks_subject'>
                <img className="Courselist_icon2" src="./avatar.png"></img>
   
                <div className='Classrank'>
                <div className='highest_marks'>Lowest Marks</div>
                <div>Tanmay Bhat</div>
               
                </div>
               
             </div>
             
             </div>
   
            
             </div>
             <img  className='Ranks_image' src='./ranks.png'></img>
             </div>
       );
     }
 };

 export default subjectprogress;