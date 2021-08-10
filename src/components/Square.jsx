import React
 from "react";
const Square = (props) => {
    const baseStyle = "flex items-center justify-center w-1/5  border b-1 ";
    return (
        <div className={baseStyle + (props.index % 2 === 0 ? 'bg-red-400' : 'bg-white' )}>{props.index}</div>
    )
}

export default Square;
