import logo from './logo.svg';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import User from '../src/components/User/User';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/'><User/></Route>
      </Router>
    </div>
  );
} 

export default App;