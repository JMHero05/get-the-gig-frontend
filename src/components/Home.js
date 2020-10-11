import React from 'react';
import '../styles/home.css';

export default function Home() {
  return (
    <div className='row no-gutters'>
      <div className='col-md-6 no-gutters'>
        <div className='left d-flex flex-column justify-content-center align-items-center'>
          <h1>Actors</h1>
          <button>Register Here</button>
        </div>
      </div>
      <div className='col-md-6 no-gutters'>
        <div className='right d-flex flex-column justify-content-center align-items-center'>
          <h1>Casting Directors</h1>
          <button>Register Here</button>
        </div>
      </div>
    </div>
  );
}
