// import { mount } from "enzyme";
// import { MemoryRouter } from "react-router-dom";
// import App from "./App";
// import Form from "./components/SignIn/SignIn";
// import Home from "./components/Home/Home";
// import Student from "./components/Student/Student";
// import StudentRegistration from "./components/StudentRegistration/StudentRegistration";
// import AddCourse from "./components/AddCourse/AddCourse";

// describe("App Component", () => {
//   let wrapper = null;

//   const component = (path) => {
//     return mount(
//       <MemoryRouter initialEntries={[`${path}`]}>
//         <App />
//       </MemoryRouter>
//     );
//   };

//   beforeEach(() => {
//     wrapper = component();
//   });

//   it("renders home correctly", () => {
//     wrapper = component("/login");

//     expect(wrapper.find(Form)).toHaveLength(1);
//     expect(wrapper.find(Student)).toHaveLength(0);
//     expect(wrapper.find(StudentRegistration)).toHaveLength(0);
//     expect(wrapper.find(AddCourse)).toHaveLength(0);
//   });

// });
