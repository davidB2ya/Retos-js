import './App.css';
import Cards from './Components/Content/Cards/Cards';
import Header from './Components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Cards/>
    </div>
    </Router>
  );
}

export default App;
