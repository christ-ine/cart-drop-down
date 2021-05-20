import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div className="App">
      <Router>
        <HomeScreen />
      </Router>
    </div>
  );
}

export default App;
