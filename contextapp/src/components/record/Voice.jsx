import React from 'react'

const Voice = () => {
  return (
    <div>
        <h1>

        Add Voice Note
        🎙
        </h1>
    </div>
  )
}

export default Voice

import React from "react";
import ReactDOM from "react-dom/client";
import { AudioRecorder } from 'react-audio-voice-recorder';

const addAudioElement = (blob) => {
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
  audio.src = url;
  audio.controls = true;
  document.body.appendChild(audio);
};
