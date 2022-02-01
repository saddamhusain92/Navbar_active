import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import Er from './Er';
import Saddam from './Saddam';
import Navigation from './Navigation';
import Suport from './Suport';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navigation/>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/saddam" element={<Saddam/>} />
       <Route path="/suport" element={<Suport/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="*" element={<Er/>}/>
    </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
