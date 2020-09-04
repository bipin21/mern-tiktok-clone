import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      {/* app container */}
      <div className="app__videos">
        <Video
          url="sample3.mp4"
          channel="bipinkarki"
          description="bipi song"
          song="la la la ow ow "
          likes={100}
          shares={200}
          messages={300}
        />
        <Video
          url="sample3.mp4"
          channel="bipinkarki1"
          description="bipi song"
          song="la la la ow ow "
          likes={100}
          shares={200}
          messages={300}
        />
        <Video
          url="sample3.mp4"
          channel="bipinkarki2"
          description="bipi song"
          song="la la la ow ow "
          likes={100}
          shares={200}
          messages={300}
        />
        <Video
          url="sample3.mp4"
          channel="bipinkarki3"
          description="bipi song"
          song="la la la ow ow "
          likes={100}
          shares={200}
          messages={300}
        />
      </div>
      {/* Videos */}
    </div>
  );
}

export default App;
