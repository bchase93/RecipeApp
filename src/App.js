import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import About from "./pages/About"
import TopBar from './Components/TopBar';
import SideBar from './Components/SideBar';
import RecipeContent from './Components/RecipeContent';

function App() {
  return (
    <div className="app">
      <TopBar/>
      <div class="row">
        <div class="col-2">
          <SideBar/>   
        </div>
        <div class="col-10">
          <RecipeContent/>
        </div>
      </div>
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
