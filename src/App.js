import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NeonHeader from "./components/neon-header/NeonHeader";
import HomePage from './pages/home-page/HomePage';
import NeonFooter from './components/neon-footer/NeonFooter';
import axios from 'axios';
import LoginPage from './pages/login-page/LoginPage';

function App() {

  return (
    <>
      <Router>
        <NeonHeader />
        <div className='page-data'>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/login' element={<LoginPage />}/>
          </Routes>
        <NeonFooter />
        </div>
      </Router>
    </>
  );
}

export default App;
