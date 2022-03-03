import './App.css';
import SideNav from './components/SideNav/SideNav'
import Coursescreen from './components/Course_nav/Coursescreen';
function App() {
  return (
    <div style={{ backgroundImage: `url('/background.jpg')` }}  className="App">
      <Coursescreen/>
    </div>
  );
}

export default App;
