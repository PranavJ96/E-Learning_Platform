import { shallow } from "enzyme";

import SignIn from "./SignIn";

describe("MyProfile", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<SignIn/>);
  });

  it('check if there are two headers one for signin and one for sign up', () => {
    let header = wrapper.find("h1");
    expect(header.length).toBe(2);
  });
  
  it('User Name label exists', () => {
    let header = wrapper.find(".signinlabel");
    expect(header.length).toBe(2);
  });
  it('Sign in with google text', () => {
    let header = wrapper.find(".Google-label").text();
    expect(header).toBe("Sign In with Google");
  });
  it('Sign Up field labels', () => {
    let header = wrapper.find(".signuplabel");
    expect(header.length).toBe(5);
  });
});
