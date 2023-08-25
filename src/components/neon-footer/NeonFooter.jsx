import React from 'react'
import './neon-footer.css'
import img1 from '../../img/58209396e830406ba3d0ecf92d9aaec5-removebg-preview.png'

const NeonFooter = () => {
  return (
    <footer>
        <div className='footer-data container'>
            <div>
                <h1>NEON RP</h1>
                <b>COPYRIGHT © 2023 NEONRP</b>
            </div>
            <img src={img1}/>
        </div>
    </footer>
  )
}

export default NeonFooter