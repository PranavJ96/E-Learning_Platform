import "./Chat.css";
import SideNav from "../SideNav/SideNav";
import ChatList from "./ChatList/ChatList";
import ChatDetails from "./ChatDetails/ChatDetails";
import ChatDetailsName from "./ChatDetailsName/CharDetailsName";
function Chat() {
  return (
    <div class="container">
      <div class="sideNav">
        <SideNav />
      </div>
      <div class="main-content-dashboard">
        <div class="chat-Header">Chat</div>
        <div class="chatContent">
          <div class="ChatListContainer">
            <ChatList />
          </div>
          <div class="ChatDetailsMainContainer">
              <div class="ChatPersonDetials">
                <ChatDetailsName/>
              </div>
              <div class="ChatDetailsContainer">
            <ChatDetails />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chat;
