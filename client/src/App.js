import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from './Components/about';
import ADSL from './Components/buyNow/adslService';
import Ilasoco from './Components/buyNow/ilasocoService';
import Landline from './Components/buyNow/landline';
import Mysms from './Components/buyNow/mysmsService';
import Simcard from './Components/buyNow/simcard';
import Career from './Components/career';
import Contact from './Components/contact';
import Crs from './Components/crs';
import Footer from './Components/footer';
import Help from './Components/help';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Services from './Components/services';
import Support from './Components/support';
import News from './Components/news';
import Mobilemoney from './Components/services/mobileMoney';

function App() {
  return (

    <>
      <Navbar />
      {/* <Crs /> */}
      <Mobilemoney />
      <News />
      {/* <Services /> */}
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services />} />
          <Route path='/crs' element={<Crs />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/support' element={<Support />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/adsl' element ={<ADSL />} />
          <Route path='/mysms' element={<Mysms />} />
          <Route path='/ilasoco' element = {<Ilasoco /> } />
          <Route path='/landline' element = {<Landline />} />
          <Route path='/simcard' element = {<Simcard />} />
          <Route path='/help' element={<Help />} />
          <Route path='/career' element={<Career />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
