import React from 'react'
import { useState } from 'react';
import logo from '../../img/logo.png'
import './header.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NeonHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header>
        <div className='container'>
            <Link to={'/'}>
                <h1 className='logo'>NEON <h1 className='logo rp'>RP</h1></h1>
            </Link>
            <div className='navbar-links'>
                <Link to={'/'}>главная</Link>
                <Link to={'/news'}>новости</Link>
                <Link to={'/about'}>о нас</Link>
                <Link to={'/forum'}>форум</Link>
                <Link to={'/rating'}>рейтинг</Link>
                <Link to={'/donate'}>донат</Link>
            </div>
            <button onClick={handleShow}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#fff" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
            <Offcanvas show={show} onHide={handleClose} placement='top' className='offcanvas'>
              <Offcanvas.Body className='offcanvas-body'>
                <div className='navbar-links'>
                  <Link to={'/'}>главная</Link>
                  <Link to={'/news'}>новости</Link>
                  <Link to={'/about'}>о нас</Link>
                  <Link to={'/forum'}>форум</Link>
                  <Link to={'/rating'}>рейтинг</Link>
                  <Link to={'/donate'}>донат</Link>
                </div> 
              </Offcanvas.Body>
            </Offcanvas>
        </div>
    </header>
  )
}

export default NeonHeader