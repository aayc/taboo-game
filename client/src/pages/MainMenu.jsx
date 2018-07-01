import React, { Component } from 'react';
import { Panel, Grid, Row, Col, Button } from 'react-bootstrap';
class MainMenu extends Component {
	state = {users: []}

  componentDidMount() {
    /*fetch('/example')
      .then(res => res.json())
      .then(users => this.setState({ users }));*/
      
  }

  render() {
    return (
    	<Grid>
    		<Row className="show-grid">
    			<Col xs={6} md={4}></Col>
          <Col xs={6} md={4}>
		    		<Panel>
		          <Panel.Heading>
		            <center><Panel.Title componentClass="h1">Taboo</Panel.Title></center>
		          </Panel.Heading>
		          <Panel.Body>
		          <center>
		            <Button bsStyle="primary" href="/host">Host</Button>
		            <br /><br />
		            <Button bsStyle="primary" href="/join">Join</Button>
		            <br /><br />
		            <Button bsStyle="primary" href="/">Settings</Button>
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

export default MainMenu
