import React from 'react';
import Course from './Course';

export default function Courses({ courses }) {
    console.log(courses);     
    return (
        <>  
            {courses.map((course)=> (
                <Course key={course.id} name={course.name} parts={course.parts}/>
            ))}
        </>
    );
};
