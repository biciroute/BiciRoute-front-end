import React from 'react'
import './App.css';
import {Container} from "./Container";

function App() {
  const Test = () => (
    <div><h1>Hola</h1></div>
  );

  return (
    <div className="App">
      <Container view={<Test/ >} />
    </div>
  );
}

export default App;
