import "./ChatList.css";
import Button from "@material-ui/core/Button";
function ChatList() {
  return (
    <div class="chatListContainer">
      <div>
        <input class="chatListInputBox" placeholder="Search Chat" />
      </div>
      <div class="chatListButtons">
        <Button className="chatListButton">Teachers</Button>
        <Button className="chatListButtonNotSelected">Students</Button>
      </div>
      {/* <div class='chatListAddNew'>
        <div class="chatListAddNewChatText">
          Click here to start a new chat
        </div>
        <div class="chatListNewChat">
          +
        </div>
      </div> */}
      <div class="ChatListItems">
        <div Class="ChatListItem">
          <div class="chatListProfilePic">
            <img src="/teacher.jpg" alt="profilepic" class="profilePic"  />
          </div>
          <div class="chatListNameAndText">
            <div class="chatListName">
              Prof. Dr. Saketh Jadav
            </div>
            <div class="chatListLastText">
                Good Morning
            </div>
          </div>
          <div>
            <div class="ChatListChatTime">
              10.30
            </div>
            <div class="chatListChatNumber">
              2
            </div>
          </div>
        </div>
        <div Class="ChatListItem">
          <div class="chatListProfilePic">
            <img src="/MicrosoftTeams-image.png" alt="profilepic" class="profilePic"/>
          </div>
          <div class="chatListNameAndText">
            <div class="chatListName">
              Dr. Shruti Fernandes
            </div>
            <div class="chatListLastText">
                Good Morning
            </div>
          </div>
          <div>
            <div class="ChatListChatTime">
              8.30
            </div>
            <div class="chatListChatNumber">
              1
            </div>
          </div>
        </div>
        <div Class="ChatListItem">
          <div class="chatListProfilePic">
            <img src="/MicrosoftTeams-image1.jpg" alt="profilepic" class="profilePic" width="100px" />
          </div>
          <div class="chatListNameAndText">
            <div class="chatListName">
            Prof. Sidhhant Shinde
            </div>
            <div class="chatListLastText">
                Hello
            </div>
          </div>
          <div>
            <div class="ChatListChatTime">
              yesterday
            </div>
          </div>
        </div>
        <div Class="ChatListItem">
          <div class="chatListProfilePic">
            <img src="/MicrosoftTeams-image2.jpg" alt="profilepic" class="profilePic" width="100px" />
          </div>
          <div class="chatListNameAndText">
            <div class="chatListName">
            Prof. Dr. Brian Fernandes
            </div>
            <div class="chatListLastText">
                Good Morning
            </div>
          </div>
          <div>
            <div class="ChatListChatTime">
              yesterday
            </div>
          </div>
        </div>
        <div Class="ChatListItem">
          <div class="chatListProfilePic">
            <img src="/MicrosoftTeams-image3.jpg" alt="profilepic" class="profilePic" width="100px" />
          </div>
          <div class="chatListNameAndText">
            <div class="chatListName">
              Prof. Dr. Diptesh
            </div>
            <div class="chatListLastText">
                Hi
            </div>
          </div>
          <div>
            <div class="ChatListChatTime">
              2days
            </div>
          </div>
        </div>
        <div Class="ChatListItem">
          <div class="chatListProfilePic">
            <img src="/MicrosoftTeams-image4.jpg" alt="profilepic" class="profilePic" width="100px" />
          </div>
          <div class="chatListNameAndText">
            <div class="chatListName">
              Prof. Dr. Vishwajith Nair
            </div>
            <div class="chatListLastText">
                Bye
            </div>
          </div>
          <div>
            <div class="ChatListChatTime">
              3days
            </div>
          </div>
        </div>
        <div Class="ChatListItem">
          <div class="chatListProfilePic">
            <img src="/MicrosoftTeams-image5.jpg" alt="profilepic" class="profilePic" width="100px" />
          </div>
          <div class="chatListNameAndText">
            <div class="chatListName">
              Prof. Dr. Tapati pal
            </div>
            <div class="chatListLastText">
                Good Morning
            </div>
          </div>
          <div>
            <div class="ChatListChatTime">
              5days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatList;
