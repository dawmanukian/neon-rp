import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NeonHeader from "./components/neon-header/NeonHeader";
import HomePage from './pages/home-page/HomePage';
import NeonFooter from './components/neon-footer/NeonFooter';
import axios from 'axios';
import LoginPage from './pages/login-page/LoginPage';
import Error404Page from './pages/erro404-page/Error404Page';
import AboutPage from './pages/about-page/AboutPage';
import RatingPage from './pages/rating-page/RatingPage';


function App() {
  const players = [
    {
      id: 1,
      nick: 'Rasul_Shara',
      position: '1',
      sum: '164 775 511 ₽'
    },
    {
      id: 2,
      nick: 'Nikki_Blackberry',
      position: '2',
      sum: '124 583 794 ₽'
    },
    {
      id: 3,
      nick: 'Alexsey_Volk',
      position: '3',
      sum: '96 937 876 ₽'
    }
  ]

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
            <Route path='/rating' element={<RatingPage players={players}/>} />
          </Routes>
        <NeonFooter />
        </div>
      </Router>
    </>
  );
}

export default App;
