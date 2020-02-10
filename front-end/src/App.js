import React, { useState } from 'react';
import './App.css';

// Components
import TimeStamp from './Components/TimeStamp/TimeStamp'
import LoginScreen from './Components/Auth/LoginScreen/LoginScreen'

const App = () => {

	const [isUserConnected, setIsUserConnected] = useState(false)
	const [user, setUser] = useState({})

	return (
		<div className='App'>
			<TimeStamp />
			{isUserConnected ? <p>Welcome {user.name}!</p> : <LoginScreen setIsUserConnected={ setIsUserConnected } setUser={ setUser }/> }

		</div>
	)
}

export default App