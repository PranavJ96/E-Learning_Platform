import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import LiveClass from './components/LiveClass/LiveClass';


function App() {
  return (
    <div style={{ backgroundImage: `url('/background.jpg')` }}  className="App">
      <LiveClass/>
      
    </div>
  );
}

export default App;
