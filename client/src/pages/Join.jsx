import React, { Component } from 'react';
import { FormControl, Panel, Grid, Row, Col, Button } from 'react-bootstrap';
import { join } from "../components/socket-api.js"

class Join extends Component {

	constructor (props) {
		super(props)

		this.state = {
			roomId: "",
			username: ""
		}

		this.handleChange = (e) => {
			this.setState({ [e.target.name] : e.target.value })
		}

		this.joinRoom = () => {
			join(this.state.roomId, this.state.username).then(
			() => {
				this.props.history.push({
					pathname: "/lobby",
					state: {
						username: this.state.username
					}
				})
			},
			() => {
				alert("Failed to join room.  Maybe it doesn't exist.")
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
		            <center><Panel.Title componentClass="h1">Join Existing Game</Panel.Title></center>
		          </Panel.Heading>
		          <Panel.Body>
		          <center>
		          	<FormControl
		          		type="text"
		          		name="username"
		          		placeholder="Your ID"
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

		            <br />
		            <br /><br />
		            <Button bsStyle="primary" onClick={this.joinRoom}>Join</Button>
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
