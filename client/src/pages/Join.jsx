import React, { Component } from 'react';
import { FormControl, Panel, Grid, Row, Col, Button } from 'react-bootstrap';

class Join extends Component {

	constructor (props) {
		super(props)

		this.state = {
			roomId: "",
			playerId: ""
		}

		this.handleChange = (e) => {
			this.setState({ [e.target.name] : e.target.value })
		}

	}
  
  render() {
    return (
    	<Grid>
    		<Row className="show-grid">
    			<Col xs={6} md={4}></Col>
          <Col xs={6} md={4}>
		    		<Panel>
		          <Panel.Heading>
		            <center><Panel.Title componentClass="h1">Host New Game</Panel.Title></center>
		          </Panel.Heading>
		          <Panel.Body>
		          <center>
		          	<FormControl
		          		type="text"
		          		name="roomId"
		          		placeholder="Room ID"
		          		value={this.state.roomId}
		          		onChange={this.handleChange}
		          	/>
		          	<FormControl
		          		type="text"
		          		name="playerId"
		          		placeholder="Your ID"
		          		value={this.state.playerId}
		          		onChange={this.handleChange}
		          	/>
		            <br />
		            <br /><br />
		            <Button bsStyle="primary" href="/">Join</Button>
		            <br /><br />
		            <Button bsStyle="primary" href="/">Back</Button>
		          </center>
		          </Panel.Body>
		        </Panel>
		       </Col>
		    </Row>
		  </Grid>
    )
  }
}

export default Join
