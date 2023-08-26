import React from 'react'
import './neon-footer.css'
import img1 from '../../img/58209396e830406ba3d0ecf92d9aaec5-removebg-preview.png'

const NeonFooter = () => {
  return (
    <footer>
      <div className='footer-data container'>
          <div className='footer-text'>
              <h1 className='neon'>NEON <h1 className='neon rp'>RP</h1></h1>
              <b>COPYRIGHT © 2023 NEONRP</b>
              <div className='footer-btns'>
                <button>Стать партнером</button>
                <button>Техподдержка </button>
              </div>
          </div>
      </div>
    </footer>
  )
}

export default NeonFooter