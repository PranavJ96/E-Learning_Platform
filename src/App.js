import './App.css';
import SideNav from './components/SideNav/SideNav'
import SignIn from './components/SignIn/SignIn'
function App() {
  return (
    <div style={{ backgroundImage: `url('/background.jpg')` }}  className="App">
      <SignIn/>
    </div>
  );
}

export default App;
