import React from 'react';

export default function Content({ parts }) {
    console.log(parts);     

    const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);
    console.log(totalExercises);

    return (
        <>
            {parts.map((part)=> (
                <div key={part.id}>
                    <p>{part.name} {part.exercises}</p>
                </div>
            ))}
            
            <p>Total of {totalExercises} exercises.</p>
        </>
    );
}
