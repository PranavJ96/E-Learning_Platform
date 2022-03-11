import './App.css';
import SideNav from './components/SideNav/SideNav'
import Coursescreen from './components/Course_nav/Coursescreen';
import Coursedetails from './components/Coursedetails/Coursedetails';
import Courseoptions from './components/Course_nav/courseoptions/Courseoptions';
function App() {
  return (
    <div style={{ backgroundImage: `url('/background.jpg')` }}  className="App">
      <Coursedetails/>
    </div>
  );
}

export default App;
