import { shallow } from "enzyme";

import Chat from "./Chat";
import ChatList from "./ChatList/ChatList";
import ChatDetails from "./ChatDetails/ChatDetails";
import ChatDetailsName from "./ChatDetailsName/ChatDetailsName";

describe("MyProfile", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Chat/>);
  });

  it('check if there are two headers one for signin and one for sign up', () => {
    let header = wrapper.find(".chat-Header").text();
    expect(header).toBe("Chat");
  });
  
  it('renders the ChatList component', () => {
    expect(wrapper.find(ChatList).length).toBe(1);
  });
  it('renders the ChatDetails component', () => {
    expect(wrapper.find(ChatDetails).length).toBe(1);
  });
  it('renders the ChatDetailsName component', () => {
    expect(wrapper.find(ChatDetailsName).length).toBe(1);
  });
});
