import React from 'react';
import './neon-servers.css';

const NeonServers = ({servers}) => {
  return (
    <div>
        <h1>СЕРВЕРА</h1>
        <div className='all-servers'>
            {servers.map(el => {
                return (
                    <div className='server'>
                        <div>
                            <h5>{el.name}</h5>
                            <b>{el.members} / {el.max}</b>
                        </div>
                        <div className='server-number'>
                            <b>
                                {el.number}
                            </b>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default NeonServers