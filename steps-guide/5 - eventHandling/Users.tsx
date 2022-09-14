import React,{useState} from 'react'

// creating interface
interface IState{
    names: String,
    title: String,
}
interface IPROPS{
    userId: number;
    username: String;

}

export default class Users extends React.Component<IPROPS, IState>{
    // create constructor 1, todissable eslint error use below comment, this will remove linter error
    // eslint-disable-next-line
    constructor(props:IPROPS){
        // define super

        super(props);

        // create state
        this.state = {
            names: 'Anish',
            title: 'ReactDeveloper'
        }
    }
    // after constructor we have render method 2
    render(){
        // destructuring this.props just because we are using again and again
        let {userId, username} = this.props;
        const {names,title} = this.state;
        return(
            <>
            <h2>Wlc to class Component</h2>
            {/* <h5>userid: {this.props.userId}</h5> */}
            <h5>userid: {userId}</h5>
            {/* <span>{this.props.username}</span> */}
            <span>{username}</span>

            <div className="card bg-light">
                <h1>class comp state</h1>
                {names} {title}
            </div>
            </>

        )
    }
}