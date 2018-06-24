import React, { Component } from 'react';
import { FormControl, Panel, Grid, Row, Col, Button } from 'react-bootstrap';

class Host extends Component {

	constructor (props) {
		super(props)

		this.state = {
			roomId: "",
			maxPlayers: 4
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
		            <br />
		            <FormControl
		          		type="number"
		          		name="maxPlayers"
		          		placeHolder="Max # of players"
		          		value={this.state.maxPlayers}
		          		onChange={this.handleChange}
		          	/>
		            <br /><br />
		            <Button bsStyle="primary" href="/">Start</Button>
		            <br /><br />
		          </center>
		          </Panel.Body>
		        </Panel>
		       </Col>
		    </Row>
		  </Grid>
    )
  }
}

export default Host
