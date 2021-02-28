import React from "react";
import useSound from "use-sound";

const Chaatreuse = require("./chaatreuse.mp3");

const VoiceButton = (props: { title: string }) => {
  const { title } = props;

  const playSound = () => {
    let audio = new Audio()
    audio.src = "./chaatreuse.mp3"
    audio.load()
    if (audio) {
      audio
        .play()
        .then(() => console.log("playing"))
        .catch((err: any) => console.log(err));
    }
  };

  return (
    <>
      <button
        style={{
          border: "none",
          padding: "10px 30px",
          borderRadius: 5,
          outline: "none",
          background: "blue",
          color: "white",
          marginBottom: 20,
          fontSize: 20,
          cursor: "pointer",
        }}
        onClick={playSound}
      >
        {title}
      </button>
    </>
  );
};

export default VoiceButton;
