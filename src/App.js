import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NeonHeader from "./components/neon-header/NeonHeader";
import HomePage from './pages/home-page/HomePage';
import NeonFooter from './components/neon-footer/NeonFooter';
import axios from 'axios';
import LoginPage from './pages/login-page/LoginPage';
import Error404Page from './pages/erro404-page/Error404Page';
import AboutPage from './pages/about-page/AboutPage';
import RatingPage from './pages/rating-page/RatingPage';
import NewsPage from './pages/news-page/NewsPage';


function App() {
  const news = [
    {
      id: 1,
      img: 'https://wallpaperaccess.com/full/1282778.jpg',
      title: 'ГЛОБАЛЬНОЕ ДЕВЯТОЕ ОБНОВЛЕНИЕ',
      text: 'Глобальное девятое обновление в честь Дня Рождения проекта с новой фракцией, переработанным функционалом фракций, шахтой и новой работой шахтера и многим другим уже в игре! Промокод oneyear и obnova9 уже доступны!',
      date: '13.08.2023'
    },
    {
      id: 1,
      img: 'https://wallpaperaccess.com/full/1282778.jpg',
      title: 'ГЛОБАЛЬНОЕ ДЕВЯТОЕ ОБНОВЛЕНИЕ',
      text: 'Глобальное девятое обновление в честь Дня Рождения проекта с новой фракцией, переработанным функционалом фракций, шахтой и новой работой шахтера и многим другим уже в игре! Промокод oneyear и obnova9 уже доступны!',
      date: '13.08.2023'
    },
    {
      id: 1,
      img: 'https://wallpaperaccess.com/full/1282778.jpg',
      title: 'ГЛОБАЛЬНОЕ ДЕВЯТОЕ ОБНОВЛЕНИЕ',
      text: 'Глобальное девятое обновление в честь Дня Рождения проекта с новой фракцией, переработанным функционалом фракций, шахтой и новой работой шахтера и многим другим уже в игре! Промокод oneyear и obnova9 уже доступны!',
      date: '13.08.2023'
    }
  ]
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
            <Route path='/news' element={<NewsPage news={news}/>} />
          </Routes>
        <NeonFooter />
        </div>
      </Router>
    </>
  );
}

export default App;
