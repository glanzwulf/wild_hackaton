import React from 'react';
import magnif from './magnif.gif'

    const LoadingSpinner = () => (
      <div className='LoadingSpinner'>
        <img src={magnif} className='magnif' alt='loading' />
      </div>
    );

    export default LoadingSpinner;