import React, { Component } from 'react';
import Peer from "simple-peer"
import TabooCard from '../components/TabooCard.jsx';
import { addSocketListener, removeSocketListener, getRoomUsernames } from '../components/socket-api.js'

class Game extends Component {

	constructor (props) {
		super(props)

		this.peer = Peer({trickle: false, initiator: true})
		this.peer.on('signal', (data) => console.log("signal: " + data))
		this.peer.on('connect', () => console.log("peer connected"))
		this.peer.on('data', (data) => console.log("got data"))
		this.peer.on('close', () =>  console.log("connection closed"))


	}

	componentDidMount () {

	}
  
  render() {
    return (
    	<TabooCard />
    )
  }
}

export default Game
