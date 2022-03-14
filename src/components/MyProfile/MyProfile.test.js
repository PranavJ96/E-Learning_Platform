import { shallow } from "enzyme";

import AccountDetailsStudent from './AccountDetailsStudent/AccountDetailsStudent';
import ProfileSettings from './ProfileSettings/ProfileSettings';
import SideNav from "../SideNav/SideNav";
import MyProfile from "./MyProfile";

describe("MyProfile", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<MyProfile/>);
  });

  it('renders the SideNav component', () => {
    expect(wrapper.find(SideNav).length).toBe(1);
  });
  it('renders the AccountDetailsStudent component', () => {
    expect(wrapper.find(AccountDetailsStudent).length).toBe(1);
  });
  it('Correct Header', () => {
    let header = wrapper.find(".myProfile-Header").text();
    expect(header).toBe("My Profile");
  });
  it('renders the ProfileSettings component', () => {
    expect(wrapper.find(ProfileSettings).length).toBe(1);
  });
});
