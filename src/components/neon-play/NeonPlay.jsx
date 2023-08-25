import React from 'react';
import './neon-play.css';
import { Link } from 'react-router-dom';
import playImg from '../../img/grand-theft-auto-san-andreas-wallpaper-preview-removebg-preview.png'
import NeonServers from '../neon-servers/NeonServers';

const NeonPlay = () => {

    const servers = [
        {
            id: 1,
            name: 'Neon RP - Moscow 01',
            members: 442,
            max: 500,
            number: '01'
        },
        {
            id: 2,
            name: 'Neon RP - Yerevan 02',
            members: 230,
            max: 500,
            number: '02'
        },
        
    ]

  return (
    <div className='neon-play'>
        <div className='container'>
            <div className='neon-play-info'>
                <img src={'https://cdn.dribbble.com/users/1452233/screenshots/3677361/media/2f48eeedc6151ca422b05ae6d663e364.png?resize=800x600&vertical=center'}
                    width={'70%'}
                    style={{borderRadius: '12px'}}
                />
                <h1 className='neon-play-ab rp'>Neon Role Play</h1>
                <h1 className='neon-play-ab'>Играй со своими друзьями</h1>
                <Link>            
                    <button className='sign-in'>
                        Войти
                    </button>
                </Link>
            </div>
            <div className='servers'>
                <NeonServers servers={servers}/>
            </div>
        </div>
    </div>
  )
}

export default NeonPlay