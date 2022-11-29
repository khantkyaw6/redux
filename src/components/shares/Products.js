import React from 'react';

export default function Products({ product }) {
  return (
    <div className='col-md-3'>
      <div className='card' style={{ width: '18rem' }}>
        <img
          src={product.image}
          style={{ width: '150px', height: '150px' }}
          className='card-img-top'
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>{product.title}</h5>
          <p className='card-text'>{product.description}</p>
          <a href='#' className='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
