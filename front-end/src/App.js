import React, { useState, Fragment } from 'react';
import './App.css';
import styled from 'styled-components'

// Components
import TimeStamp from './Components/TimeStamp/TimeStamp'
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
	// !!! Change default value to false !!!
	const [isUserConnected, setIsUserConnected] = useState(true)
	const [user, setUser] = useState({})

	return (
		<Fragment className='App'>
			<Header>
				<TimeStamp />
				{ isUserConnected ? <p>Welcome {user.name}!</p> : <LoginScreen setIsUserConnected={ setIsUserConnected } setUser={ setUser }/> }
			</Header>
			<Main>
				{ isUserConnected && <ChatGeneralContainer /> }
			</Main>
		</Fragment>
	)
}

export default App