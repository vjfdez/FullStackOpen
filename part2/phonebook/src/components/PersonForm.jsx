import React from 'react';

export default function PersonForm({ atSendData, nameHandler, name, numberHandler, number }) {
  return (
    <>
        <form onSubmit={atSendData}>  
            <div>
                name: <input value={name} onChange={nameHandler}/>
            </div>
            <div>
                number: <input value={number} onChange={numberHandler}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    </>
  );
}
