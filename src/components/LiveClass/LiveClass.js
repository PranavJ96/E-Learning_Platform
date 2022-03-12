import React from "react";
import './LiveClass.css';
import SideNav from "../SideNav/SideNav";
import ChatDetailsName from "../Chat/ChatDetailsName/ChatDetailsName";
import EmojiEmotions from '@material-ui/icons/EmojiEmotions';
import AttachFile from '@material-ui/icons/AttachFile';
import Send from '@material-ui/icons/Send';
const LiveClass = () => {
    return (
        <div>
            <div className="sideNav1">
                <SideNav />
                <div className="title1">
                    <div className="liveclasstitle">Live Class</div>


                    <div className="background">
                        <div className="uppertext">
                            <div>
                            <div className="liveclasstitle2">UX Design</div>
                            <div className="date">23rd February 2023/Lecture:15</div>
                            </div>
                            <div className="endbutton">End Now</div>
                        </div>
                        <img className="liveclassimage" src="./liveclass.png"></img>

                    </div>
                   
                        
                    <div className="background2">
                        <img className="record" src="./video.png"></img>
                        <img className="record" src="./audio.png"></img>
                        <img className="share" src="./share.png"></img>
                        <img className="record" src="./record1.png"></img>

                    </div>
                    
                    <div className="LiveChat">
                    <div className="livechattitle">Live Class</div>
                    <div className="Chatbubble">
                    <div>
          <img
            src="/teacher.jpg"
            alt="profilepic"
            class="profilePicInChat_live"
            width="100px"
          />
        </div>
                    <div class="livechatDetailsLeftChat">
            Lorem Ipsum is simply dummy text 
            </div>
            </div>
            <div class="liveChatDetailsTimeOfChat">
                10.30
            
            </div>
            <div className="Chatbubble">
                    <div>
          <img
            src="/teacher.jpg"
            alt="profilepic"
            class="profilePicInChat_live"
            width="100px"
          />
        </div>
                    <div class="livechatDetailsLeftChat">
            Lorem Ipsum is simply dummy text 
            </div>
            </div>
            <div class="liveChatDetailsTimeOfChat2">
                10.30
            
            </div>

            <div class="chatScreenSendMessageSection">
          <div class="chatDetailsAddChat">
            <div>
                <EmojiEmotions/>
            </div>
            <div class="classDetailsInput">
                <input class="chatDetailsInput" placeholder="Type here.." />
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

            </div>
            </div>

        </div>
    );
};

export default LiveClass;