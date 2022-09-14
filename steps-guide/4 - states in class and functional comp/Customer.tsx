import React,{useState} from 'react';

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
// 7 part
// creating state
interface IState{
    name: String,
    title:String,
}
// creating interface type for typescrypt to use props
interface IPROPS{
    name: String;
    title: String;
    age?: number;
}
export let Customer:React.FC<IPROPS> = ({name, title, age}) =>{
    const [state,setState] = useState<IState>({name: 'Anish Mandal', title: 'Mern Stack'})
    return(
        <>
        <h1>Typescript functional component</h1>
        <h4>{name } <span>{title}</span></h4>
        {age}

        <div className="col-md-4 bg-warning">
            {state.name}  {state.title}
        </div>
        </>
    )
}