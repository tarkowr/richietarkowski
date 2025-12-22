import React from 'react';

import './Error.css';

export const Error = () => {
  return (
    <div className="h-100 d-flex text-center error-wrapper">
      <div className="w-100 justify-content-center align-self-center">
        <div className="m-auto">
          <div className="h5">
            This page doesn't exist
          </div>
          <button className="home-button mt-4">
            <a href="/">Home</a>
          </button>
        </div>
      </div>
    </div>
  );
}
