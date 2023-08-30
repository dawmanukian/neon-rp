import React from 'react'
import './neon-socialmedias.css'
import NeonSocialMedia from '../neon-socialmedia/NeonSocialMedia'
import { FaVk, FaInstagram, FaDiscord,FaTelegram } from "react-icons/fa6";
import img1 from './../../img/58209396e830406ba3d0ecf92d9aaec5-removebg-preview.png'
import AOS from 'aos';

const NeonSocialMedias = () => {
  return (
    <div className='social-medias container'>
      <h1>наши социальные сети </h1>
      <div className='medias'>
        <NeonSocialMedia logo={<FaVk />}/>
        <NeonSocialMedia logo={<FaDiscord />}/>
        <NeonSocialMedia logo={<FaTelegram />}/>
      </div>
    </div>
  )
}

export default NeonSocialMedias