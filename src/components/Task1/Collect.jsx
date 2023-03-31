import React, { useState } from 'react'
import MyTable from './MyTable'
import MyForm from './MyForm'

export default function Collect() {

  let [myData,setmyData] = useState([]);
  let FormData = (data) => {
    setmyData(data);
    console.log(myData);
  }

  return (
    <div>
      <MyForm FormData = {FormData}/>
      <MyTable data = {myData}/>
    </div>
  )
}
