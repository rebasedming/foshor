import React from "react";

import { playSound } from "../../../utils/audio"

const VoiceButton = (props: { file: any, title: string, voiceButtonClicked: () => void }) => {
  const { file, title, voiceButtonClicked } = props

  return (
    <>
      <button
        style={{
          border: "none",
          padding: "10px 45px",
          borderRadius: 5,
          outline: "none",
          background: "#5adae0",
          color: "white",
          marginBottom: 20,
          fontSize: 20,
          cursor: "pointer",
        }}
        onClick={() => playSound(file, voiceButtonClicked)}
      >
        {title}
      </button>
    </>
  );
};

export default VoiceButton;
