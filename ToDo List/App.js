import React from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";

const App = () => {

  const [item,setItem] = useState();

  const itemEvent = (event) => {
    setItem(event.target.value);

  }

  return(
    <>
      <div className="main_div">
        <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>

        <input  type="text" placeholder="Add An Items" onChange={itemEvent}/>
        <Button className="newbtn">
          <AddIcon/>
          </Button>
          <br/>

          <ol>
            <li>{item}</li>
          </ol>
          <br/>

        </div>

      </div>
    </>
  );
};

export default App;