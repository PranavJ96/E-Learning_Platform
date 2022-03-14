import { shallow } from "enzyme";
import SideNav from "./SideNav";
import NavLink from "./NavLink/NavLink";

describe("MyProfile", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<SideNav/>);
  });

  it('renders the NavLink component', () => {
    expect(wrapper.find(NavLink).length).toBe(8);
  });
});
