import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function MyForm({ FormData }) {
  // let student = {};
  
  let [name,setName] = useState("");
  let [age,setAge] = useState();
  let [error,setError] = useState({name:null,age:null});
  let [Data,setData] = useState([]);
  // let [nameFlag, setNameFlag] = useState(false);
  // let [ageFlag, setAgeFlag] = useState(false);
  const Mo = useRef(null);

  // useEffect(() => {
  //   setStudent((prevStudent) => ({...prevStudent, id: count.current}));
  // }, [count]);

// FormData(student);
  useEffect(() => {
    FormData(Data);
  }, [Data,FormData]);

  const getNameValue = (e) => {
    if(e.target.value === ""){
      setError((prevErrors) => ({...prevErrors,name:"Name is required"}));
    }else if(!/^[a-zA-Z][a-zA-Z0-9]*$/.test(e.target.value)){
      setError((prevErrors) => ({...prevErrors,name:"Name is not true"}));
    }
    else if(e.target.value.length < 3){
      setError((prevErrors) => ({...prevErrors,name : "Name Must be more than 3 characters"}));
    }else{
      setName(e.target.value);
      setError((prevErrors) => ({...prevErrors, name : null}))
      console.log("Mo = ",Mo.current.value)
      // setNameFlag(true);
    }
  }

  const getAgeValue = (e) => {
    if(e.target.value===""){
      setError((prevErrors) => ({...prevErrors, age : "Age is required"}));
    }else if(!/^[0-9]+$/.test(e.target.value)){
      setError((prevErrors) => ({...prevErrors, age : "Age must be numbers only"}));
    }else if(e.target.value < 18){
      setError((prevErrors) => ({...prevErrors, age : "Age must be more than 18"}));
    }
    else{
      setAge(e.target.value);
      setError((prevErrors) => ({...prevErrors, age : null}));
      // setAgeFlag(true);
    }
  }

  const SendDataFromFormtoCollect = (e) => {
    e.preventDefault();
     if (error.age == null && error.name == null) {
          // setObj({
          //   id: count,
          //   name: valuename,
          //   age: valueAge,
          // });
          // setStudent({
          //   name : name,
          //   age : age
          // })

          setData([...Data, {name: name, age : age}]);

          // console.log(student)
          console.log(Data)

          // setNameFlag(false);
          // setAgeFlag(false);
          // let student = {
          //   id: count,
          //   name: valuename,
          //   age: valueAge,
            
          // };
      // setflagage(!flagage);
      //  setFlagName(!flagname);
    }
    console.log(Data);
  };

    
  return (
    <div className='container'>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" onChange={getNameValue} ref = {Mo}/>
         <p className='text-danger p-2'><strong>{error.name}</strong></p>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter Your Age" onChange={getAgeValue}/>
         <p className='text-danger p-2'><strong>{error.age}</strong></p>

      </Form.Group>

      <Button variant="primary" type="submit" className='mb-4' onClick={SendDataFromFormtoCollect}>
        Submit
      </Button>
    </Form>
    </div>
  )
}
