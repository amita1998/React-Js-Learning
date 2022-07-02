import React, { useState } from "react";


const App = () => 
{

  const [name , setName] = useState();

  const [lastname , setLastName] = useState();

  const [fullName , setfullName] = useState();



  const inputEvent = (event) => {

      // console.log(event.target.value);
      setName(event.target.value);
  };

  const inputEventTwo = (event) => {

      setLastName(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setfullName(name);
  }
  return(
    <>
      <div className="main_div">
      <form onSubmit={onSubmit}>
      <div>
        <h1>Hello {fullName}</h1>
        <input type="text" placeholder="Enter Your Last Name" 
        onChange={inputEvent} 
          value={name} /> 
          <br />

          <input type="text" placeholder="Enter Your Name" 
        onChange={inputEventTwo} 
          value={lastName} /> 
         

          
       
        <button type="submit">Click me </button>

      </div>
      </form>
      </div>
    </>
  );

};

export default App;
