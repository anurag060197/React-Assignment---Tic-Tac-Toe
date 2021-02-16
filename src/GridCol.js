import React from 'react';
import './App.css';

const GridCol = ({rowIndex, col, colIndex, turn, handleClick}) => {

    return (
        <div className="col" onClick={()=>handleClick(rowIndex, colIndex)}>
            {col}
        </div>
    );
};

export default GridCol;