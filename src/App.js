
import './App.css';
import Navbar from "./components/navbar";

import About from './containers/about/about';
import Cta from './components/cta/cta';
import Blog from './containers/blog/Blog';
import Footer from './containers/footer/Footer';
import Portfolio from './containers/features/Features';
import Header from './containers/header/Header';
import { Feature2 } from './containers/features2/Feature2';
import  { Contact } from './containers/contact/contact';
import { Route ,Routes, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        
          <Route path="Contact" element={<Contact />} />
      
      </Routes>
    </BrowserRouter>
      <Navbar />
      <Header/>
      <About/>
      <Feature2/>
      <Cta/>
      <Blog/>
      <Portfolio/>
      
     <Contact/>
  <Footer/>
    </div> 
  );
}

export default App;
