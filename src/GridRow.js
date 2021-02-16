import React from 'react';
import './App.css';
import GridCol from "./GridCol";

const GridRow = ({row, rowIndex, turn, handleClick}) => {
    return (
        <div className="row">
            {row.map(
                (col, colIndex)=>(<GridCol key={colIndex} rowIndex={rowIndex} col={col} colIndex={colIndex} turn={turn} handleClick={handleClick}/>)
            )};
        </div>
    );
};

export default GridRow;