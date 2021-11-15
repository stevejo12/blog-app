import { BrowserRouter as Router } from 'react-router-dom';

import AllRoutes from './AllRoutes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
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
