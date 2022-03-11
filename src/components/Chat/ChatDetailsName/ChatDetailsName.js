import "./ChatDetailsName.css";
import VideoIcon from '@material-ui/icons/VideoCall';
import AudioIcon from '@material-ui/icons/Call';
function ChatDetailsName(){
    return(
        <div Class="ChatDetailsNameItem">
          <div class="ChatDetailsNameProfilePic">
            <img src="/teacher.jpg" alt="profilepic" class="charDetialsProfilePic" width="100px" />
          </div>
          <div class="ChatDetailsNameNameAndText">
            <div class="ChatDetailsNameName">
              Prof. Dr. Saketh Jadav
            </div>
            <div class="ChatDetailsNameLastText">
                <div></div>
                online
            </div>
          </div>
          <div class="ChatDetailsCallOptions">
           <div>
                <VideoIcon fontSize="large" />
           </div>
           <div class="chatDetailsNameAudio">
               <AudioIcon  fontSize="large" className="AudioCall"/>
           </div>
          </div>
        </div>
    );
};
export default ChatDetailsName;