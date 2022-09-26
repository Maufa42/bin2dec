import { useState, useEffect } from "react";
import Table from './Table'
import React from "react";
const Form = () => {

  const [input,setinput] = useState("");
  const [decimal,setDecimal] = useState([]);



  // const getDatafromLS = () => {
  //   const data = localStorage.getItem("Decimal");
  //   if (data) {
  //     return JSON.parse(data);
  //   } else {
  //     return [];
  //   }
  // };
  

  //decimal to binary conversion
  const bin = (input) => {
    var parsed = parseInt(input, 10);
    if (isNaN(parsed)) { return 0; }
    
    let hexstr = ""
    while(parsed > 0) {
        hexstr = (parsed % 2) + hexstr
      parsed = parseInt(parsed / 2)
    }
    
    return hexstr;
  }

  console.log("ACTUALLY VALUE: ",input);
  console.log("BINARY VALUE: ",bin(input));
  

//creating object and adding to Decimal state
  const handleSubmit= (e) => {
    e.preventDefault();
    console.log("Buton is triggered", typeof(decimal))
    let dec = {
      input,
      decimal: bin(input),
    }
    setDecimal([...decimal, dec]);
    setinput("");

  }
  //Saving the Instace in Local Storage
console.log("After button clicked", decimal)
  useEffect(() => {
    console.log("Decimal value trigger");
    localStorage.setItem("Decimal", JSON.stringify(decimal));
    console.log("++++++++++",localStorage.getItem("Decimal"))
  //  
  }, [decimal]);

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="number"
        onChange={(e) => {
          setinput(e.target.value);
        }}
      ></input>
      <input className="form-control" type="submit"></input>
    </form>
    




    <div className="view-container">
            {decimal?.length > 0 && (
              <>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <th>#</th>
                      <th>Decimal</th>
                      <th>Binary</th>
        
                    </thead>
                    <tbody>
                    <Table decimal = {decimal} />
                    </tbody>
                  </table>
                </div>
              </>
            )}
            {decimal?.length < 1 && <div>No Entries Yet</div>}
          </div>
    
      </>
  );
};

export default Form;


//


//(decimal?.length > 0 ) ? <> <div><div> : <div> No Entry</div>