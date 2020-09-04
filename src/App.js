import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">

      {/* app container */}
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
      {/* Videos */}


    </div>
  );
}

export default App;
