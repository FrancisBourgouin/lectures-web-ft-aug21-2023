import { FaceDetector, FilesetResolver } from "@mediapipe/tasks-vision";

export const initializefaceDetector = async () => {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
  );
  const faceDetector = await FaceDetector.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite`,
      delegate: "GPU",
    },
    runningMode: "VIDEO",
  });

  return faceDetector;
};

let lastVideoTime = -1;
export const predictWebcam = (faceDetector, video, action) => {
  let startTimeMs = performance.now();

  // Detect faces using detectForVideo
  if (video.currentTime !== lastVideoTime) {
    lastVideoTime = video.currentTime;
    const detections = faceDetector.detectForVideo(video, startTimeMs).detections;

    action(detections);
  }

  // Call this function again to keep predicting when the browser is ready
  window.requestAnimationFrame(() => predictWebcam(faceDetector, video, action));
};
