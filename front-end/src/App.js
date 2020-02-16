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

	const testUser = {
		name: 'Maxim',
		picture: 'https://scontent.fcrl2-1.fna.fbcdn.net/v/t1.0-9/49895917_10210558255711458_428092245229436928_o.jpg?_nc_cat=109&_nc_ohc=tav9dwOWWIYAX9po187&_nc_ht=scontent.fcrl2-1.fna&oh=4daebdc0440c00a6baca76ea051f1803&oe=5ED70DC5'
	}

	// States
	// !!! Change default value to false !!!
	const [isUserConnected, setIsUserConnected] = useState(true)
	const [user, setUser] = useState(testUser)

	return (
		<Fragment className='App'>
			<Header>
				{/* <TimeStamp /> */}
				{isUserConnected ? <p>Welcome {user.name}!</p> : <LoginScreen setIsUserConnected={setIsUserConnected} setUser={setUser} />}
			</Header>
			<Main>
				{isUserConnected && <ChatGeneralContainer user={user} />}
			</Main>
		</Fragment>
	)
}

export default App