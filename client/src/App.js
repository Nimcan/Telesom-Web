import './App.css';
import About from './Components/about';
import Career from './Components/career';
import Crs from './Components/crs';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Services from './Components/services';
import Support from './Components/support';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Services />
      {/* <Crs /> */}
      {/* <Portfolio /> */}
      <Support />
      <Career />
    </>
  );
}

export default App;
