import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import ProtectedRoute from 'components/ProtectedRoute';
import Admin from 'pages/Admin';

function App() {

  return (
    <div className=" App ">
      <Router>
        <div className="">
          <Navbar />
        </div>
        <div className="container mx-auto">
           <Switch>
              <Route component={Home} exact path="/" />
              <ProtectedRoute component={Admin}  path="/admin" />

              
          </Switch>
        </div>
       
      </Router>
    </div>
  );
}

export default App;
