
import './App.css';
import Login from './components/login/login';
import { BrowserRouter, Route } from 'react-router-dom'
import Signup from './components/signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Route exact path="/" component={Login}>
  
    </Route>
    <Route path="/signup" component={Signup}>
      </Route>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
