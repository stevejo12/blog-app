import { BrowserRouter as Router } from 'react-router-dom';

import AllRoutes from './AllRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalStyle from './globalStyles';

import './App.css';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <AllRoutes />
      <Footer />
    </Router>
  );
}

export default App;
