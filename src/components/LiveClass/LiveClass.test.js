import { shallow } from "enzyme";

import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import LiveClass from "./LiveClass";
import Send from '@material-ui/icons/Send';
import AttachFile from '@material-ui/icons/AttachFile';

describe("MyProfile", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<LiveClass/>);
  });
  
  it('Live Class Header', () => {
    let header = wrapper.find(".liveclasstitle").text();
    expect(header).toBe("Live Class");
  });
  it('renders the AttachFile component', () => {
    expect(wrapper.find(AttachFile).length).toBe(1);
  });
  it('renders the ScreenShareIcon component', () => {
    expect(wrapper.find(ScreenShareIcon).length).toBe(1);
  });
  it('renders the Send component', () => {
    expect(wrapper.find(Send).length).toBe(1);
  });
  it('renders the VideoCallIcon component', () => {
    expect(wrapper.find(VideoCallIcon).length).toBe(1);
  });
  it('renders the AlbumOutlinedIcon component', () => {
    expect(wrapper.find(AlbumOutlinedIcon).length).toBe(1);
  });
});
