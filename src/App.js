import Navbar from './components/Navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SingnUp from './components/pages/SignUp';


function App() {
  return (
    <>
     
     <Router>  

     <Navbar/>
     <Routes>
       <Route path="/" element= { <Home/>}/>
       <Route path="/services" element= { <Services/>}/>
       <Route path="/products" element= { <Products/>}/>
       <Route path="/sign-up" element= { <SingnUp/>}/>
     </Routes>

     </Router>
 

    </>
  );
}

export default App;
