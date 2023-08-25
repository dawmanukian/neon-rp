import React from 'react'
import './neon-socialmedias.css'
import NeonSocialMedia from '../neon-socialmedia/NeonSocialMedia'
import { FaVk, FaInstagram, FaDiscord } from "react-icons/fa6";
import img1 from './../../img/58209396e830406ba3d0ecf92d9aaec5-removebg-preview.png'

const NeonSocialMedias = () => {
  return (
    <div className='social-medias container'>
      <h1>наши социальные сети </h1>
      <div className='medias'>
        <NeonSocialMedia logo={<FaVk />}/>
        <NeonSocialMedia logo={<FaInstagram />}/>
        <NeonSocialMedia logo={<FaDiscord />}/>
      </div>
    </div>
  )
}

export default NeonSocialMedias