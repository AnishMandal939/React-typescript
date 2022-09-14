Typescript with React

Japa pe every type ka data type define karna pardta hai
isme hum OOPS ke sath kaam karteing hai


------------------------

Create typescript+react app
npx create-react-app app_name -> for react app
npx create-react-app app_name --template=typescript -> for typesctipt

-----------------
Project settings are dont in tsconfig.json for typescript projects


----styling ---------------
inline style
<h1 style={{color: 'red'}}>Hello TR</h1>
 internal style
 import './App.css';

function App() {
  let bg = {
    backgroundColor: 'blue',
    color: 'red'
  }
  return (
    <h1 style={bg}>Hello TR</h1>
  );
}

export default App;

--external styling--
creating seperate style file

-- use framework for css---
2 ways to use 1) cdn link and another then npm method
visit npmjs for npm ways to install 


-using bootstrap--
to use it you need to import it if using npm version
--

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
--

adding fontawesome -- import link copy and add it to css file


---------------------------------

4 - Functional Component in ReactTypescript

Component -
```sh
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
```
-Import in app.tsx components
```sh
import './App.css';
import CustomerClassic, { Cust, Customer } from './components/Customer';

function App() {
  return (
    <>
      <Customer />
      <CustomerClassic />
      <Cust />
    </>    
  );
}

export default App;

```

------------------------

5 - Prop with React Typescript Passing props to components


- In typescript we have to define what specific thing we want to export in component as a props it's not done in normal way like react , even we cannot direct destructure our props in parent components



6- Class Component - User.tsx

```sh
import React from 'react'

// creating interface
interface IPROPS{
    userId: number;
    username: String;

}

export default class Users extends React.Component<IPROPS>{
    // create constructor 1, todissable eslint error use below comment, this will remove linter error
    // eslint-disable-next-line
    constructor(props:IPROPS){
        // define super
        super(props)
    }
    // after constructor we have render method 2
    render(){
        // destructuring this.props just because we are using again and again
        let {userId, username} = this.props;
        return(
            <>
            <h2>Wlc to class Component</h2>
            {/* <h5>userid: {this.props.userId}</h5> */}
            <h5>userid: {userId}</h5>
            {/* <span>{this.props.username}</span> */}
            <span>{username}</span>


            </>

        )
    }
}
```


---------------------

----Handling State with react typescript-----

8 event handling