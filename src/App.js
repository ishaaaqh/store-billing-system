import React from 'react';
import './App.css';
import products from './Utilities/Products'; 

function App() {
  return (
    <div className="App">
      <p>this is the billing application</p>
      
      <ul>
      {Object.entries(products).map(product => <li key={product[0]}>{product[0]}, <ul>{Object.entries(product[1]).map( subproduct => <li key={subproduct[1]}>{subproduct[1]}</li>)}</ul>}</li>)}
     </ul>
    </div>
  );
}

export default App;
