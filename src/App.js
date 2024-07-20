import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import About from "./pages/About"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes >
          <Route exact path="/" element={ <Home />} />
          <Route exact path="/about" element={ <About />} />
          <Route exact path="/contact-us" element={ <ContactUs />} />
           
        </Routes >
      </BrowserRouter>
    </div>
  );
}



export default App;
