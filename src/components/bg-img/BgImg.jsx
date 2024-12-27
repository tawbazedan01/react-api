import React from 'react';
import bgImg from '../../assets/images/bg-img.jpg';

export default function BgImg() {
  return (
    <div>
      <div className='container pt-3 w-75 '>
        <img
          src={bgImg}
          alt="Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

    </div>
  );
}
