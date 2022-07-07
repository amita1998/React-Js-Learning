import React from "react";
import { useState } from "react";

const App = () =>{

const [num,setnum] = useState(0);

const incNum = () => {

  setnum(num + 1);
};

const decNum = () =>{
  if(num > 0)
  {
  setnum(num -1);
  }
  else{
    alert("Sorry,Zero Limit Reached");
      setnum(0);
  }
};


  return(
    <>
      <div className="main_div">
        <div className="center_div">

          <h1> {num} </h1>
          <div className="btn_div">

          <button onClick={incNum}>Increment</button>
          <button onClick={decNum}>Decrement</button>
          </div>
        </div>
      </div>
    </>

  );
};
export default App;