import { BrowserRouter as Router } from 'react-router-dom';

// import AllRoutes from './AllRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalStyle from './globalStyles';

import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import LeftSocials from './components/LeftSocials';
import RightSocials from './components/RightSocials';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      {/* <AllRoutes /> */}
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <LeftSocials />
      <RightSocials />
    </Router>
  );
}

export default App;
