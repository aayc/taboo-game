import React, { Component } from 'react';
import { FormControl, Panel, Grid, Row, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

class Lobby extends Component {

	constructor (props) {
		super(props)

		this.state = {
			playersInLobby: [],
			maxPlayers: -1
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
		            <center><Panel.Title componentClass="h1">Lobby</Panel.Title></center>
		          </Panel.Heading>
		          <Panel.Body>
		          <center>
		          	<ListGroup>

		          		<ListGroupItem></ListGroupItem>
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
