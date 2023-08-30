import React from 'react';
import './neon-play.css';
import { Link } from 'react-router-dom';
import playImg from '../../img/NEON.png'
import NeonServers from '../neon-servers/NeonServers';

const NeonPlay = () => {

    const servers = [
        {
            id: 1,
            name: 'Neon RP - Moscow 01',
            members: 442,
            max: 500,
            number: '01',
            ip: '127.0.0.1:7777'
        },
        {
            id: 2,
            name: 'Neon RP - Yerevan 02',
            members: 230,
            max: 500,
            number: '02',
            ip: '126.0.0.1:7777'
        },
        
    ]

  return (
    <div className='neon-play'>
        <div className='container'>
            <div className='neon-play-info'>
                <img src={playImg}
                    width={'70%'}
                    style={{borderRadius: '12px'}}
                />
                <h1 className='neon-play-ab rp'>Neon Role Play</h1>
                <h1 className='neon-play-ab'>Играй со своими друзьями</h1>
                <Link to={'/login'}>            
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