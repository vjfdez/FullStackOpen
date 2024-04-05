import React from 'react';

export default function Notification({ message, mode }) {
  let styles = {};

  const styleSuccess = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  };    

  const styleError = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  };

  mode === 'success' ? styles = styleSuccess : styles = styleError;
  
  if (message === null) {
    return null
  };

  return (
    <div className="error" style={styles}>
      {message}
    </div>
  )
};
