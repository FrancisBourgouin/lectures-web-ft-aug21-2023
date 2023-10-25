import { useState, useRef } from "react";
import Webcam from "react-webcam";
import "./App.css";

import { initializefaceDetector, predictWebcam } from "./helpers/webcamHelpers";

// initializefaceDetector().then(predictWebcam);

function App() {
  const [isAway, setIsAway] = useState(false);
  const webcamRef = useRef(); // Ref: Reference, is a value that will not be affected by re-renders
  const videoRef = useRef();

  const toggleAway = () => setIsAway(!isAway);

  const storeVideoRef = () => {
    videoRef.current = webcamRef.current.video;
  };

  const toggleAwayFD = (detections) => setIsAway(detections.length === 0);

  const handleWebcamReady = () => {
    storeVideoRef();
    console.log("Initializing the face detector");
    initializefaceDetector().then((faceDetector) =>
      predictWebcam(faceDetector, videoRef.current, toggleAwayFD)
    );
  };

  return (
    <>
      <header>
        <h1>Super Webcam feed!</h1>
      </header>
      <main>
        <Webcam ref={webcamRef} onUserMedia={handleWebcamReady} />
        {isAway && (
          <section className="Message">
            <h1>Will be back soon!</h1>
          </section>
        )}
        <section className="Toggle">
          <button onClick={toggleAway}>Toggle Away Mode</button>
        </section>
      </main>
    </>
  );
}

export default App;
