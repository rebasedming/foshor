import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css";
import Yutong from "./assets/yutong.png";
import VoiceButton from "./components/voiceButton";

import Chaatreuse from "./assets/chaatreuse.mp3";
import Deceasing from "./assets/deceasing.mp3";
import FoShor from "./assets/foshor.mp3";
import HeyMing from "./assets/heyming.mp3";
import JeezMan from "./assets/jeezman.mp3";
import Manhattan from "./assets/manhattan.mp3";
import MyPlace from "./assets/myplace.mp3";
import SheetFack from "./assets/sheetfack.mp3";

const App = () => {
  return (
    <div className="App">
      <Row style={{ width: "100vw" }}>
        <Col md={6}>
          <VoiceButton title="Hey, Ming" file={HeyMing} />
        </Col>
        <Col md={6}>
          <VoiceButton title="Manhattan" file={Manhattan} />
        </Col>
        <Col md={6}>
          <VoiceButton title="Chaa-treuse" file={Chaatreuse} />
        </Col>
        <Col md={6}>
          <VoiceButton title="Fo-shor" file={FoShor} />
        </Col>
        <Col md={6}>
          <VoiceButton title="I'm deceasing" file={Deceasing} />
        </Col>
        <Col md={6}>
          <VoiceButton title="Come to my place" file={MyPlace} />
        </Col>
        <Col md={6}>
          <VoiceButton title="Jeez, man" file={JeezMan} />
        </Col>
        <Col md={6}>
          <VoiceButton title="Sheet. Fack." file={SheetFack} />
        </Col>
      </Row>
    </div>
  );
};

export default App;
