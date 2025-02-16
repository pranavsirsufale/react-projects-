import React from "react";
import { AudioRecorder , useAudioRecorder } from "react-audio-voice-recorder";
import VoiceRecorder from "./VoiceRecorder";


const Voice = () => {
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder
  } = useAudioRecorder();

//   useEffect(() => {
//     if (!recordingBlob) return;

//     // recordingBlob will be present at this point after 'stopRecording' has been called
//   }, [recordingBlob])

  return (
    <div>

        <VoiceRecorder/>


      {/* <h1>
   Add Voice Note 🎙
        


      </h1>

      <AudioRecorder
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
          
        }}
        downloadOnSavePress={true}
        downloadFileExtension="mp3"
        showVisualizer={true}
        
      /> */}
    </div>
  );
};


export default Voice;