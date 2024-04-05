import React from 'react';

export default function Form({ onChanges }) {
  return (
    <>
        <input type="text" onChange={onChanges}/>
    </>
  );
};
