import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Collect from './components/Task1/Collect';
import Task2 from './components/Task2/Task2';
// import Product from './components/Product';
// import data from "./components/productsArray"


function App() {
  return (
    <div className="App">
      <h1>Task 1</h1>
      <Collect/>
      <h1>Task 2</h1>
      <Task2/>
      {/* <Product data={data}/> */}
    </div>
  );
}

export default App;
