import React, { useState } from 'react';
interface IState{
    count:number
};
  // eslint-disable-next-line
interface IProps{};

const Counter:React.FC = () =>{
      // eslint-disable-next-line
    const [counter, setCounter] = useState<IState>({count:0});
    // inc func
    const handleIncrement = () =>{
        // console.log('INC')
        setCounter({count : counter.count+1});
    }
    // dec func
    const handleDecrement = () =>{
        // console.log('INC')
        setCounter({count : counter.count-1});
    }

    return(
        <>
            <h1>Event Handling</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className='display-3'>{counter.count}</h2>
                            <button className='btn btn-success ms-3' onClick={() => handleIncrement()}>Inc</button>
                            <button className='btn btn-danger ms-3' onClick={()=> handleDecrement()}>Dec</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;