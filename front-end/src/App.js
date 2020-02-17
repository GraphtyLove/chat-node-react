import React, { useState, Fragment } from 'react';
import './App.css';
import styled from 'styled-components'
import Particles from 'react-particles-js';

// Components
import LoginScreen from './Components/Auth/LoginScreen/LoginScreen'
import ChatGeneralContainer from './Components/Chat/ChatGeneralContainer'

// Style
const Header = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const particleCanvas = {
	height: "90vh",
	width: "90vh",
	position: "absolute",
	top: "0",
	left: "0",
	zIndex: "-1"
}


const App = () => {

	// States
	const [isUserConnected, setIsUserConnected] = useState(false)
	const [user, setUser] = useState({})

	return (
		<Fragment>
			<Particles
				style={particleCanvas}
				params={{
					"particles": {
						"number": {
							"value": 130
						},
						"density": {
							"enable": true,
							"value_area": 800
						},
						"polygon": {
							"nb_sides": 5
						},
						"size": {
							"value": 3,
							"random": true,
							"anim": {
								"enable": false,
								"speed": 40,
								"size_min": 0.1,
								"sync": false
							}
						}
					},
					"opacity": {
						"value": 0.5,
						"random": false,
						"anim": {
							"enable": false,
							"speed": 1,
							"opacity_min": 0.1,
							"sync": false
						}
					},
					"interactivity": {
						"events": {
							"onhover": {
								"enable": true,
								"mode": "repulse"
							}
						}
					}
				}} />
			<Header>
				{isUserConnected && <h1>Welcome {user.name}!</h1>}
			</Header>
			<Main>
				{isUserConnected
					? <ChatGeneralContainer user={user} />
					: <LoginScreen
						setIsUserConnected={setIsUserConnected}
						setUser={setUser}
					/>}
			</Main>
		</Fragment>
	)
}

export default App