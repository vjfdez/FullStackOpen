import React from 'react';

export default function Filter({ namefilter, onWrite, arrResults }) {
  return (
    <>
        <p>filter shown with: <input value={namefilter} onChange={onWrite}/></p>
        <ul>
            {arrResults.map(result => (
              <li key={result.name}>name: {result.name} number: {result.number}</li>  
            ))}
        </ul>
    </>
  );
};
