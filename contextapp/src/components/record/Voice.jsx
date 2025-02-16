import React from 'react'
import { AudioRecorder } from 'react-audio-voice-recorder';


const Voice = () => {

    const addAudioElement = (blob) => {
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
  audio.src = url;
  audio.controls = true;
  document.body.appendChild(audio);
};


  return (
    <div>
        <h1>

        Add Voice Note
        🎙
        </h1>

        <AudioRecorder 
      onRecordingComplete={addAudioElement}
      audioTrackConstraints={{
        noiseSuppression: true,
        echoCancellation: true,
      }} 
      downloadOnSavePress={true}
      downloadFileExtension="webm"
    />
    </div>
  )
}

export default Voice



