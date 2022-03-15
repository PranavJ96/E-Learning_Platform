import "./ChatDetails.css";
import EmojiEmotions from '@material-ui/icons/EmojiEmotions';
import AttachFile from '@material-ui/icons/AttachFile';
import Send from '@material-ui/icons/Send';
function ChatDetails() {
  return (
    <div class="chatDetailsContainer">
      <div class="chatDetailsLastMessageDate">15 March 2022</div>
      <div class="chatDetailsSingleChatLeft">
        <div>
          <img
            src="/teacher.jpg"
            alt="profilepic"
            class="profilePicInChat"
            width="100px"
          />
        </div>
        <div>
            <div class="chatDetailsLeftChat">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div class="ChatDetailsTimeOfChat">
                10.30
            </div>
        </div>
      </div>
      <div class="chatDetailsSingleChatRight">
        <div>
            <div class="chatDetailsRightChat">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div class="ChatDetailsTimeOfChat">
                10.30
            </div>
        </div>
        <div>
          <img
            src="/MicrosoftTeams-image6.jpg"
            alt="profilepic"
            class="profilePicInChat"
            width="100px"
          />
        </div>
      </div>
      <div class="chatDetailsSingleChatLeft">
        <div>
          <img
            src="/teacher.jpg"
            alt="profilepic"
            class="profilePicInChat"
            width="100px"
          />
        </div>
        <div>
            <div class="chatDetailsLeftChat">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply.
            </div>
            <div class="ChatDetailsTimeOfChat">
                2 mins ago
            </div>
        </div>
      </div>
      <div class="chatDetailsSingleChatRight">
        <div>
            <div class="chatDetailsRightChat">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div class="ChatDetailsTimeOfChat">
                2 mins ago
            </div>
        </div>
        <div>
          <img
            src="/MicrosoftTeams-image6.jpg"
            alt="profilepic"
            class="profilePicInChat"
            width="100px"
          />
        </div>
      </div>
      <div class="chatScreenSendMessageSection">
          <div class="chatDetailsAddChat">
            <div>
                <EmojiEmotions/>
            </div>
            <div class="classDetailsInput">
                <input class="chatDetailsInput" placeholder="Type a message..." />
            </div>
            <div>
                <AttachFile/>
            </div>
            <div class="chatDetailSendButton">
                <Send/>
            </div>
          </div>
      </div>
    </div>
  );
}
export default ChatDetails;
