import React from 'react';
import Square from './Square';

const NumbersTable = (props) => {
    let squares = [];

    for (let i = 1; i <= props.limit; i++) {
        squares.push(<Square index={i}/>)
    }
    return (
        <div className="flex">{squares}</div>
    )
}

export default NumbersTable;