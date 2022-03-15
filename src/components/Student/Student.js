import "./Student.css";
import { Bar } from 'react-chartjs-2';
import SideNav from "../SideNav/SideNav";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
function Student() {
  return (
    <div class="container">
      <div class="sideNav">
        <SideNav pageName="student" />
      </div>
      <div class="main-content-student">
        <div class="student-Header">Student</div>
        <div class="studentContent">
          <div class="studentSearch">
            <div class="studentSearchDiv">
              <div class="studentSearchName">Search</div>
              <div class="studentSearchInput">
                <input
                  class="studentInputBox"
                  placeholder="Enter Student Name"
                />
              </div>
            </div>
            <div class="studentSearchDiv">
              <div class="studentSearchName">Choose Subject</div>
              <div class="studentSearchInput">
                <select required class="studentSelectBox"  name="cars" id="cars">
                  <option value="" disabled selected hidden>Select Subject</option>
                  <option value="saab">Mathematics</option>
                  <option value="mercedes">Physics</option>
                  <option value="audi">Chemistry</option>
                  <option value="saab">Electronics</option>
                  <option value="mercedes">English</option>
                  <option value="audi">Science</option>
                </select>
              </div>
            </div>
            <div class="studentListOfStudents">
                List of Students
            </div>
            <div class="StudentListItems">
                <div class="studentListImageDiv">
                    <img src="/MicrosoftTeams-image.png" alt="studentImage" class="studentImageList" />
                </div>
                <div class="studentlistName">
                    Chaitali Kulkarni
                </div>
            </div>
            <div class="StudentListItems">
                <div class="studentListImageDiv">
                    <img src="/MicrosoftTeams-image7.jpg" alt="studentImage" class="studentImageList" />
                </div>
                <div class="studentlistName">
                    Swati Singh
                </div>
            </div>
            <div class="StudentListItems">
                <div class="studentListImageDiv">
                    <img src="/MicrosoftTeams-image2.jpg" alt="studentImage" class="studentImageList" />
                </div>
                <div class="studentlistName">
                Prachi Jagtap
                </div>
            </div>
            <div class="StudentListItems">
                <div class="studentListImageDiv">
                    <img src="/MicrosoftTeams-image3.jpg" alt="studentImage" class="studentImageList" />
                </div>
                <div class="studentlistName">
                Siddhi Deshpande
                </div>
            </div>
            <div class="StudentListItems">
                <div class="studentListImageDiv">
                    <img src="/MicrosoftTeams-image4.jpg" alt="studentImage" class="studentImageList" />
                </div>
                <div class="studentlistName">
                Saurabh Shivtarkar
                </div>
            </div>
            <div class="StudentListItems">
                <div class="studentListImageDiv">
                    <img src="/MicrosoftTeams-image5.jpg" alt="studentImage" class="studentImageList" />
                </div>
                <div class="studentlistName">
                Diptesh Gaikwad
                </div>
            </div>
            <div class="StudentListItems">
                <div class="studentListImageDiv">
                    <img src="/MicrosoftTeams-image6.jpg" alt="studentImage" class="studentImageList" />
                </div>
                <div class="studentlistName">
                Mohitosh Chaudhari
                </div>
            </div>
          </div>
          <div class="studentDetails">
              <div class="studentHeader">
                  Student's Progress
              </div>
              <div class="studentImgName">
                    <div>
                    <img src="/MicrosoftTeams-image7.jpg" alt="studentImage" class="studentImageDetails" />
                    </div>
                    <div class="studentDetailsName">
                        Swati Singh
                    </div>
              </div>
              <div>
              <Bar data={{
            labels: ['Discrete Maths', 'Science', 'English', 'Electronics', 'Physics', 'Chemistry'],
            datasets: [{
                label: 'marks',
                data: [35, 50, 80, 95, 90, 77],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }} />
              </div>
              <div>
                  <img src="/batches.jpg" alt="batches" className="studentBatches"/>
              </div>
              <div>
                  <button className="studentButton">Send Message</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Student;
