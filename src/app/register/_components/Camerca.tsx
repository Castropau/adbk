"use client";

import { useRef, useState } from "react";

interface CameraCaptureProps {
  onCapture: (imageDataUrl: string) => void; // callback to get the captured photo
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [streamStarted, setStreamStarted] = useState(false);

  const startCamera = async () => {
    if (!videoRef.current) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setStreamStarted(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Cannot access camera. Make sure you allow permission.");
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageDataUrl = canvas.toDataURL("image/png");
      onCapture(imageDataUrl); // send captured image to parent
    }
  };

  return (
    <div>
      {!streamStarted && (
        <button onClick={startCamera}>Start Camera</button>
      )}

      <video ref={videoRef} autoPlay muted style={{ width: "100%", display: streamStarted ? "block" : "none" }} />

      <canvas ref={canvasRef} style={{ display: "none" }} />

      {streamStarted && <button onClick={capturePhoto}>Capture Photo</button>}
    </div>
  );
};

export default CameraCapture;
