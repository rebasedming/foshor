import React, {useState} from "react";

import VoiceButton from "./components/voiceButton";

import Chaatreuse from "../../assets/chaatreuse.mp3";
import Deceasing from "../../assets/deceasing.mp3";
import FoShor from "../../assets/foshor.mp3";
import HeyMing from "../../assets/heyming.mp3";
import JeezMan from "../../assets/jeezman.mp3";
import Manhattan from "../../assets/manhattan.mp3";
import MyPlace from "../../assets/myplace.mp3";
import SheetFack from "../../assets/sheetfack.mp3";
import Yutong from "../../assets/yutong.png";

import { playSound } from "../../utils/audio";

import "./landing.css";

const Landing = () => {
  const [speaking, setSpeaking] = useState(false)
  const files = [
    {
      file: Chaatreuse,
      name: "Chaa-treuse"
    },
    {
      file: Deceasing,
      name: "I'm deceasing"
    },
    {
      file: FoShor,
      name: "Fo-shor"
    },
    {
      file: HeyMing,
      name: "Hey Ming"
    },
    {
      file: JeezMan,
      name: "Jeez Man"
    },
    {
      file: Manhattan,
      name: "Manhattan"
    },
    {
      file: MyPlace,
      name: "Come to my place"
    },
    {
      file: SheetFack,
      name: "Sheet. Fack."
    }
  ]

  const voiceButtonClicked = () => {
    setSpeaking(true)
    setTimeout(() => {
      setSpeaking(false)
    }, 200)
  }

  const randomFile = () => {
    const rFile = files[Math.floor(Math.random() * files.length)]
    return rFile.file
  }

  return (
    <div tabIndex={-1} style={{ background: "#060a24", minHeight: "100vh" }}>
      <div
        style={{
          paddingTop: 75,
          paddingLeft: 20,
          textAlign: "center",
          marginBottom: 100,
        }}
        onClick={() => playSound(randomFile(), voiceButtonClicked)}
      >
        <img className="spinning-yutong" src={Yutong} alt="yutong" style={{boxShadow: speaking ? "0px 4px 20px red" : "none"}} />
      </div>
      <div onClick={() => playSound(randomFile(), voiceButtonClicked)} style={{cursor: "pointer", border: "solid 1px #EFEFEF", borderRadius: 10, padding: "15px 0px", color: "#EFEFEF", textAlign: "center", maxWidth: 700, margin: "auto", background: "rgba(255, 255, 255, 0.1)"}}>
        CLICK ME
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: 700,
          margin: "auto",
          flexDirection: "row",
          textAlign: "left",
          marginTop: 50
        }}
      >
          {
            files.map((el: any) => (
              <div className="button-wrapper">
              <VoiceButton
                title={el.name}
                file={el.file}
                voiceButtonClicked={voiceButtonClicked}
              />
              </div>
            ))
          }
    </div>
    </div>
  );
};

export default Landing;
