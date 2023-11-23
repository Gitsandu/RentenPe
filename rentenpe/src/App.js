import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Header/NavBar';
import HeaderBody from './Components/Header/HeaderBody';
import Header from './Components/Header/Header';
import Carousel from './Components/Body/Carousel';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carousel></Carousel>
    </div>
  );
}

export default App;
