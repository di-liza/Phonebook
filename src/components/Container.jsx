import React from 'react';

function Container({ children }) {
  return (
    <div
      style={{
        // width: 1200,
        // margin: '0 auto',
        // textAlign: 'center',
        width: '300px',
        margin: '0px auto',
        textAlign: 'center',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
}

export default Container;
