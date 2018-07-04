import React, { Component } from 'react';
import { FormControl, Panel, Grid, Row, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { addSocketListener, removeSocketListener, getRoomUsernames } from '../components/socket-api.js'

class Lobby extends Component {

	constructor (props) {
		super(props)

		this.state = {
			usernamesInLobby: [],
			maxPlayers: -1
		}

		console.log("this state username: " + this.props.location.state.username)
		this.handleChange = (e) => {
			this.setState({ [e.target.name] : e.target.value })
		}

		addSocketListener("update-room-usernames", (usernames) => {
			this.setState({ usernamesInLobby: usernames })
		});
	}

	componentDidMount () {
		getRoomUsernames().then(
		 usernames => this.setState({ usernamesInLobby: usernames }),
		 () => console.log("Failed to get other usernames in this lobby"))
	}
  
  render() {
    return (
    	<Grid>
    		<Row className="show-grid">
    			<Col xs={6} md={4}></Col>
          		<Col xs={6} md={4}>
		    		<Panel>
		          <Panel.Heading>
		            <center><Panel.Title componentClass="h1">Lobby</Panel.Title></center>
		          </Panel.Heading>
		          <Panel.Body>
		          <center>
		          	<ListGroup>
		          		{this.state.usernamesInLobby.map((username, ix) => (
		          			<ListGroupItem key={ix}>{username}</ListGroupItem>
		          		))}
		          	</ListGroup>
		            <br /><br />
		            <Button bsStyle="primary" href="/">Start Game</Button>
		            <br /><br />
		            <Button bsStyle="primary" href="/">Exit Lobby</Button>
		          </center>
		          </Panel.Body>
		        </Panel>
		       </Col>
		    </Row>
		  </Grid>
    )
  }
}

export default Lobby
