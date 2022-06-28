import React, { useEffect, useState } from "react";


const App = () => {
  // let newTime =  new Date().toLocaleTimeString();

  const [americatime, setAmericatime] = useState("");
  const [londontime, setLondontime] = useState("");
  const [dubaitime, setdubaitime] = useState("");

  // const UpdateTime = () => {

  //   let newTime =  new Date().toLocaleTimeString();
  //   setCtime(newTime);

  // }
  // setInterval(UpdateTime,1000);

  const timeHandler = () => {
    var a = new Date();
    a = a.toLocaleString("en-US", { timeZone: "America/New_York" });
    // console.log(d)
    setAmericatime(a);

    var l = new Date();
    l = l.toLocaleString("en-GB", {timeZone: "Europe/London" });
    // console.log(t)
    setLondontime(l);

    var d = new Date();
    d = d.toLocaleString("en-GB", {timeZone: "Asia/Dubai" });
    // console.log(t)
    setdubaitime(d);
  };


  useEffect(() => {
    setInterval(() => timeHandler(), 1000);
  }, []);

  return (
    <>
      {/* <h1>This is App.js</h1> */}
       <h3> America : {americatime}</h3> 
       <h3> London : {londontime}</h3>
       <h3> Dubai : {dubaitime}</h3>
   
      
   {/* <button onClick={UpdateTime}>Get Time</button> */}

    </>
  );
};
export default App;
