import React from 'react';

const Loader = () => {
  const loaderContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100vh',
  };

  const spinnerStyle = {
    border: '6px solid #e3c8c8ff',
    borderTop: '6px solid #3747d7ff',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 0.8s linear infinite',
    margin: '40px'
  };

  const keyframesStyle = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <>
      <style>{keyframesStyle}</style>
      <div style={loaderContainerStyle}>
        <div style={spinnerStyle}></div>
      </div>
    </>
  );
};

export default Loader;
