import './App.css';
import Career from './Components/career';
import Crs from './Components/crs';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Services from './Components/services';

function App() {
  return (
    <>
      <Navbar />
      {/* <Services /> */}
      <Crs />
      <Portfolio />
      <Career />
    </>
  );
}

export default App;
