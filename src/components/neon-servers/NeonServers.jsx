import React, { useState } from 'react';
import './neon-servers.css';
import CopyToClipboard from 'react-copy-to-clipboard';

const NeonServers = ({servers}) => {

    const [isCopied, setIsCopied] = useState(false)

  return (
    <div>
        <h1>СЕРВЕРА</h1>
        <div className='all-servers'>
            {isCopied && <span className='servers-success'>IP адрес скопирован !</span>}

            {servers.map(el => {
                return (
                    <CopyToClipboard text={el.ip} key={el.id}>
                        <div className='server' onClick={() => {
                            setIsCopied(true)
                            setTimeout(() => {
                                setIsCopied(false)
                            }, 2500);
                        }}>
                            <div className='server-data'>
                                <h5>{el.name}</h5>
                                <b>{el.members} / {el.max}</b>
                                <button className='api-btn'>Скопировать IP</button>
                                {isCopied && <span>Copied !</span>}
                            </div>  
                            <div className='server-number'>
                                <b>
                                    {el.number}
                                </b>
                            </div>
                        </div>
                    </CopyToClipboard>
                )
            })}
        </div>
    </div>
  )
}

export default NeonServers