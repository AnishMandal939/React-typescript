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

// creating interface type for typescrypt to use props
interface IPROPS{
    name: String;
    title: String;
    age?: Number;
}
export let Customer:React.FC<IPROPS> = ({name, title, age}) =>{
    return(
        <>
        <h1>Typescript functional component</h1>
        <h4>{name } <span>{title}</span></h4>
        {age}
        </>
    )
}