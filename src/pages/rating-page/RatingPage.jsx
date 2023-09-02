import React from 'react'
import './rating.css'

const RatingPage = ({players}) => {
  return (
    <div className='container rating'>
        <h1>САМЫЕ БОГАТЫЕ ИГРОКИ</h1>
        {players.map(el => {
            return (
                <div className='player-data'>
                    <h5>{el.position}</h5>
                    <h5 style={{color: '#51CCDFFF'}}>{el.nick}</h5>
                    <h5>{el.sum}</h5>
                </div>
            )
        })}
    </div>
  )
}

export default RatingPage