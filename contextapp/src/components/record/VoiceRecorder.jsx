import React, { useState, useRef } from "react";
import { FaMicrophone, FaStop, FaPlay, FaDownload } from "react-icons/fa";

const VoiceRecorder = () => {
  const [recording, setRecording] = useState(false);
const [videoRecording, setVideoRecording] = useState(false)

  const [audioURL, setAudioURL] = useState(null);
  
  const [videoURL,setVideoURL] = useState(null)

  const mediaRecorderRef = useRef(null);

  const videoRecorderRef = useRef(null)

  const audioChunksRef = useRef([]);
  const videoChunksRef = useRef([])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const videoStream = await navigator.mediaDevices.getUserMedia({video : true})

        videoRecorderRef.current = new MediaRecorder(videoStream)
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      videoRecorderRef.current.ondataavailable = ( event ) => {
        if ( event.data.size > 0 ){
            videoChunksRef.current.push(event.data)
        }
      }

      videoRecorderRef.current.onstop = () => {
        const videoBlob = new Blob(videoChunksRef.current , { type : 'audio/webm'});
        const url = URL.createObjectURL(videoBlob);
        setVideoURL(url)
        videoChunksRef.current = []
        
      }


      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        audioChunksRef.current = [];
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Voice Recorder</h2>
        
        {recording ? (
          <button
            onClick={stopRecording}
            className="bg-red-500 text-white px-6 py-3 rounded-full flex items-center justify-center w-full transition duration-300 hover:bg-red-700"
          >
            <FaStop className="mr-2" /> Stop Recording
          </button>
        ) : (
          <button
            onClick={startRecording}
            className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center justify-center w-full transition duration-300 hover:bg-blue-700"
          >
            <FaMicrophone className="mr-2" /> Start Recording
          </button>
        )}

        {audioURL && (
          <div className="mt-6">
            <audio controls className="w-full">
              <source src={audioURL} type="audio/webm" />
              Your browser does not support the audio element.
            </audio>

            <a
              href={audioURL}
              download="recorded-audio.webm"
              className="mt-3 inline-flex items-center justify-center w-full bg-green-500 text-white px-6 py-3 rounded-full transition duration-300 hover:bg-green-700"
            >
              <FaDownload className="mr-2" /> Download Audio
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceRecorder;
