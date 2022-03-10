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
            <img src="/teacher.jpg" alt="profilepic" class="profilePic" width="100px" />
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
            <img src="/teacher.jpg" alt="profilepic" class="profilePic" width="100px" />
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
              1
            </div>
          </div>
        </div>
        <div Class="ChatListItem">
          <div class="chatListProfilePic">
            <img src="/teacher.jpg" alt="profilepic" class="profilePic" width="100px" />
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
          </div>
        </div>
        <div Class="ChatListItem">
          <div class="chatListProfilePic">
            <img src="/teacher.jpg" alt="profilepic" class="profilePic" width="100px" />
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
          </div>
        </div>
        <div Class="ChatListItem">
          <div class="chatListProfilePic">
            <img src="/teacher.jpg" alt="profilepic" class="profilePic" width="100px" />
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
          </div>
        </div>
        <div Class="ChatListItem">
          <div class="chatListProfilePic">
            <img src="/teacher.jpg" alt="profilepic" class="profilePic" width="100px" />
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
          </div>
        </div>
        <div Class="ChatListItem">
          <div class="chatListProfilePic">
            <img src="/teacher.jpg" alt="profilepic" class="profilePic" width="100px" />
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatList;
