import React from 'react'
import './neon-socialmedia.css'
import { Link } from 'react-router-dom'

const NeonSocialMedia = ({name, followers, logo, link}) => {
  return (
    <div className='social-media'>
      <a href={link} target='_blank'>
        <div>
          <h2>{name}</h2>
          <p>{followers}</p>
          <div className='social-media-logo'>
              {logo}
          </div>
        </div>
      </a>
    </div>
  )
}

export default NeonSocialMedia