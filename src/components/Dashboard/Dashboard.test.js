import { shallow } from "enzyme";

import SideNav from "../SideNav/SideNav";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  it('renders the SideNav component', () => {
    expect(wrapper.find(SideNav).length).toBe(1);
  });
});
