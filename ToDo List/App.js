import React from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState,useEffect } from "react";
import ListCom from "./ListCom"; 



const App = () => {

  const [item,setItem] = useState();
  const [newitem,setNewItem] = useState([]);

useEffect(() => {
    const List = localStorage.getItem("my-list");
    if(List){
      setItem(JSON.parse(List));
    }
  },[]);


  const itemEvent = (event) => {
    setItem(event.target.value);

  }
  
  const ListOfItems = () => {
    setNewItem((prevValue)=>{
      return [...prevValue, item]
    });

      setItem(" ");
  };

  return(
    <>
      <div className="main_div">
        <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>

        <input  type="text" value={item} placeholder="Add An Items" onChange={itemEvent}/>
        <Button className="new_btn" onClick={ListOfItems}>
          <AddIcon/>
          </Button>
          <br/>

          <ol>
          
            {newitem.map((val ,index) => {
              return  <ListCom key={index} text ={val} />;
            })}
          </ol>
          <br/>

        </div>

      </div>
    </>
  );
};

export default App;
