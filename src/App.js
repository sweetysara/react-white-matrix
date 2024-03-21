import React from 'react';
import MyComponent from './components/MyComponent';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MyComponent/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
