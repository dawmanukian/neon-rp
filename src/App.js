import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NeonHeader from "./components/neon-header/NeonHeader";
import HomePage from './pages/home-page/HomePage';

function App() {
  return (
    <>
      <Router>
        <NeonHeader />
        <div className='page-data'>
          <Routes>
            <Route path='/' element={<HomePage />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
