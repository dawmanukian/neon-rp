import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NeonHeader from "./components/neon-header/NeonHeader";
import HomePage from './pages/home-page/HomePage';
import NeonFooter from './components/neon-footer/NeonFooter';
import axios from 'axios';
import LoginPage from './pages/login-page/LoginPage';
import Error404Page from './pages/erro404-page/Error404Page';
import AboutPage from './pages/about-page/AboutPage';

function App() {

  return (
    <>
      <Router>
        <NeonHeader />
        <div className='page-data'>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='*' element={<Error404Page />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        <NeonFooter />
        </div>
      </Router>
    </>
  );
}

export default App;
