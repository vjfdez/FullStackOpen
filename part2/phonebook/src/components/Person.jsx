import React from 'react';

export default function Person({name, number, onSmash}) {
  return (
    <>
      <p>{name} {number} <button onClick={onSmash}>Delete</button></p> 
    </>
  );
};
