import React, { useState, Fragment } from 'react';
import './App.css';
import styled from 'styled-components'

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


const App = () => {

	// States
	const [isUserConnected, setIsUserConnected] = useState(false)
	const [user, setUser] = useState({})

	return (
		<Fragment>
			<Header>
				{isUserConnected ? <p>Welcome {user.name}!</p> : <LoginScreen setIsUserConnected={setIsUserConnected} setUser={setUser} />}
			</Header>
			<Main>
				{isUserConnected && <ChatGeneralContainer user={user} />}
			</Main>
		</Fragment>
	)
}

export default App