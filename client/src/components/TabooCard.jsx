import React, { Component } from 'react';
import { Button, Panel, Grid, Col, 
  Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import SpeechRecognition from 'react-speech-recognition'

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  listening: PropTypes.bool,
  browserSupportsSpeechRecognition: PropTypes.bool
}

const speechRecognitionOptions = {
  autoStart: false
}

class TabooCard extends Component {
  render() {
    const { 
      transcript, 
      resetTranscript,
      startListening,
      stopListening,
      listening,
      browserSupportsSpeechRecognition 
    } = this.props

    if (!browserSupportsSpeechRecognition) return null

    this.word = "Greetings"
    this.forbidden = ["hello", "goodbye"]

    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <Panel>
              <Panel.Heading>
                <center><Panel.Title componentClass="h1">{this.word}</Panel.Title></center>
              </Panel.Heading>
              <Panel.Body>
                <ListGroup>
                  {this.forbidden.map(w => {
                    return <ListGroupItem bsStyle={transcript.includes(w) ? "warning" : ""}>{w}</ListGroupItem>
                  })}
                </ListGroup>
                <p className="App-intro">
                  {transcript}
                </p>
              </Panel.Body>
            </Panel>
            <Button bsStyle="primary" onClick={startListening} disabled={listening}>Start</Button>
            <Button bsStyle="primary" onClick={stopListening} disabled={!listening}>Stop</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

TabooCard.propTypes = propTypes

export default SpeechRecognition(speechRecognitionOptions)(TabooCard)
