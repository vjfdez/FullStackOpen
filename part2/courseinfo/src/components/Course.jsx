import React from 'react';
import Header from './Header';
import Content from './Content';

export default function Course({ name, parts}) {
    console.log(parts);     
    return (
        <>
            <Header title={name}  />
            <Content parts={parts} />
        </>
    );
}
