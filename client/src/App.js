import './App.css';
import About from './Components/about';
import ADSL from './Components/buyNow/adslService';
import Ilasoco from './Components/buyNow/ilasocoService';
import Landline from './Components/buyNow/landline';
import Mysms from './Components/buyNow/mysmsService';
import Career from './Components/career';
import Contact from './Components/contact';
import Crs from './Components/crs';
import Footer from './Components/footer';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Services from './Components/services';
import Support from './Components/support';

function App() {
  return (
    <>
      <Navbar />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Crs /> */}
      {/* <Portfolio /> */}
      {/* <Support /> */}
      {/* <Contact /> */}
      {/* <ADSL /> */}
      {/* <Mysms /> */}
      {/* <Ilasoco /> */}
      <Landline />
      <Footer />
      {/* <Career /> */}
      
    </>
  );
}

export default App;
