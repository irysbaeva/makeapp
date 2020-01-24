import React from 'react';
import './App.css';
import Home from "./components/Home";
import Form from "./components/Form";
import Render from "./components/Render";
import Constructor from "./components/Constructor";
import Slider from './components/Slider';


function App() {
  return (
      <div>
        <div className="App-header">
          <h1>MakeApp</h1>
            <div className={'home-page'}>
                <Home /><br/>
                <Form />
            </div>
        </div>
        <Slider/>
        <Render />
        <Constructor />
      </div>
  );
}

export default App;
