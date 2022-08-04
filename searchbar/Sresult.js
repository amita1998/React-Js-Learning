import React from "react";
import './index.css';

const Sresult = (props) => {

    const imag=`https://source.unsplash.com/300x300/?${props.name}`;
    return (
      <div className="App">
        
  <img src={imag} alt='parinot' />
      </div>
    );

}

export default Sresult;

