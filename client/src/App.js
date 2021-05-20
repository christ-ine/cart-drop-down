import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero.js/Hero'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        {/* <Hero /> */}
        {/* <Navbar /> */}
        {/* <HeroSection /> */}
        <HomeScreen />
      </Router>
    </div>
  );
}

export default App;
