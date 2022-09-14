import React from 'react';

// normal way of creating function
export default function CustomerClassic(){
    return(
        <h1>Basic functional way of function</h1>
    )
}

// arrow function

export const Cust =() =>{
    return(
        <h1>Functional component</h1>
    )
}   

// typescript way

export let Customer:React.FC = () =>{
    return(
        <h1>Typescript functional component</h1>
    )
}