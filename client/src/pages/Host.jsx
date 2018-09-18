import React, { Component } from 'react';
import { FormControl, Panel, Grid, Row, Col, Button } from 'react-bootstrap';
import { create, debug } from '../components/socket-api.js'

class Host extends Component {

	constructor (props) {
		super(props)

		this.state = {
			username: "",
			roomId: ""
		}

		this.handleChange = (e) => {
			this.setState({ [e.target.name] : e.target.value })
		}

		this.makeRoom = () => {
			create(this.state.roomId, this.state.username).then(
			() => {
				this.props.history.push({
					pathname: "/lobby",
					state: {
						username: this.state.username
					}
				})
			},
			() => {
				alert("Room creation failed: try a different room name.")
				this.setState({ roomId : "" })
			})
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
		          		name="username"
		          		placeholder="Your Name"
		          		value={this.state.username}
		          		onChange={this.handleChange}
		          	/>
		          	<br />
		          	<FormControl
		          		type="text"
		          		name="roomId"
		          		placeholder="Room ID"
		          		value={this.state.roomId}
		          		onChange={this.handleChange}
		          	/>
		            <br /><br />
		            <Button bsStyle="primary" onClick={this.makeRoom}>Start Lobby</Button>
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

export default Host
