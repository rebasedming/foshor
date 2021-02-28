import React from 'react';
import {Row, Col} from "react-bootstrap"
import logo from './logo.svg';
import './App.css';
import Yutong from "./assets/yutong.png"
import VoiceButton from "./components/voiceButton"

const App = () => {
  return (
    <div className="App">
      <div style={{ marginTop: 20, marginLeft: 20, textAlign: "left" }}>
        <img className="App-logo" src={Yutong} alt="yutong" />
      </div>
      <Row>
        <Col md={6}>
          <VoiceButton title="Chaa-treuse" />
        </Col>
        <Col md={6}>
          <VoiceButton title="Fo-shor" />
        </Col>
        <Col md={6}>
          <VoiceButton title="I'm deceasing" />
        </Col>
        <Col md={6}>
          <VoiceButton title="Come to my place" />
        </Col>
        <Col md={6}>
          <VoiceButton title="Jeez, man" />
        </Col>
        <Col md={6}>
          <VoiceButton title="Sheet. Fack." />
        </Col>
        <Col md={6}>
          <VoiceButton title="Cognac" />
        </Col>
        <Col md={6}>
          <VoiceButton title="Hey, Ming" />
        </Col>
        <Col md={6}>
          <VoiceButton title="Manhattan" />
        </Col>
      </Row>
    </div>
  );
}

export default App;
