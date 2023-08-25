import React from 'react'
import './neon-socialmedia.css'

const NeonSocialMedia = ({name, followers, logo, link}) => {
  return (
    <div className='social-media'>
        <h2>{name}</h2>
        <p>{followers}</p>
        <div className='social-media-logo'>
            {logo}
        </div>
    </div>
  )
}

export default NeonSocialMedia