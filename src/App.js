import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/home/Home';
import NavBar from './components/pages/shared/header/NavBar';
import Error from './components/pages/error/Error';
import Login from './components/pages/login/Login';
import Booking from './components/pages/booking/Booking';
import Packages from './components/pages/packages/Packages';
import Orders from './components/pages/orders/Orders';
import Register from './components/pages/register/Register';
import Authprovider from './context/AuthProvider';
import Privateroute from './privateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Authprovider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/packages'>
              <Packages></Packages>
            </Route>
            <Privateroute exact path='/booking'>
              <Booking></Booking>
            </Privateroute>
            <Route exact path='/orders'>
              <Orders></Orders>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <Error></Error>
            </Route>

          </Switch>
        </Router>
      </Authprovider>
    </div>
  );
}

export default App;
