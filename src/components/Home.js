import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import video from '../helpers/NYC Streets.mp4';

export default function Home() {
  return (
    <div className='overlay'>
      <video autoPlay muted loop id='myVideo'>
        <source src={video} type='video/mp4' />
      </video>
      <div className='row no-gutters'>
        <div className='col-md-6 no-gutters'>
          <div className='left d-flex flex-column justify-content-center align-items-center'>
            <h1>Actors</h1>
            <Link to='/actor/registration'>
              <Button variant='primary'>Register Here</Button>
            </Link>
          </div>
        </div>
        <div className='col-md-6 no-gutters'>
          <div className='right d-flex flex-column justify-content-center align-items-center'>
            <h1>Casting Directors</h1>
            <Link to='/casting_director/registration'>
              <Button variant='danger'>Register Here</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
