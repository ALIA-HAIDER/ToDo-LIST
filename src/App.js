
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

 

function App() {
  return (
    <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>

        <Footer/>
    </BrowserRouter>
  );
}
  
export default App;
