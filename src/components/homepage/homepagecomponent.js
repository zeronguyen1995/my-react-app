import React, { Fragment } from 'react';


function homepageComponent(props)
{
    console.log(props);
    
    return (
        <Fragment>
            <div>
                <button onClick={props.increment}>increment</button>
            </div>
            <div>
                <button onClick={props.decrement}>decrement</button>
            </div>
            <div>{props.counter}</div>
        </Fragment>
    );
}


export default homepageComponent;