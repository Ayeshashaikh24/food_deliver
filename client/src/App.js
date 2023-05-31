
import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './screen/Home';
import {BrowserRouter as Router , Routes ,Route,Link} from 'react-router-dom';
import Login from './screen/Login';
import Signup from './screen/Signup';
import { CardProvider } from './components/ContextReducer';
import Cart from './screen/Cart';
import MyOrder from './screen/MyOrder';
function App() {
  return (
   <>
 <CardProvider>
   <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/createuser' element={<Signup/>} />
        <Route exact path='/myorder' element={<MyOrder/>} />
        </Routes>
    </div>
   </Router>
   </CardProvider>
   </>
  );
}

export default App;
