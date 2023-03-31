import React from 'react';
import { Table } from 'react-bootstrap';

export default function MyTable(props) {
  const myData = props.data;

  if (!myData|| myData.length === 0) {
    return null;
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {myData.map((data,index) => (
            <tr key={index+1}>
              <td>{index+1}</td>
              <td>{data.name}</td>
              <td>{data.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
