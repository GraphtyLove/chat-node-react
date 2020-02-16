import React, { useState } from 'react'
import styled from 'styled-components'
// import { subscribeToTimer } from '../../Api/Api'

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000')

// Style
const InputContainer = styled.section`
  width: 50%;
  height: 40px;
  margin-top: 10px;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
`
const InputText = styled.input`
  width: 90%;
  height: 100%;
  border: none;
  background: white;
  padding: 0 20px;
  -webkit-border-radius: 10px 0 0 10px;-moz-border-radius: 10px 0 0 10px;border-radius: 10px 0 0 10px;
    -moz-box-shadow:    3px 3px 8px 3px #ccc;
  -webkit-box-shadow: 3px 3px 8px 3px #ccc;
  box-shadow:         3px 3px 8px 3px #ccc;
`
const SubmitButton = styled.button`
  background: cornflowerblue;
  height: 105%;
  width: 100px;
  border: none;
  color: white;
  -webkit-border-radius: 0 10px 10px 0;-moz-border-radius: 0 10px 10px 0;border-radius: 0 10px 10px 0;
  -moz-box-shadow:    3px 3px 8px 3px #ccc;
  -webkit-box-shadow: 3px 3px 8px 3px #ccc;
  box-shadow:         3px 3px 8px 3px #ccc;
`

const ChatInputContainer = props => {
  // States
  const [messageToSend, setMessageToSend] = useState({})


  const clickOnSend = event => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault()
      // Trigger the button element with a click
      document.getElementById("submitButton").click()
    }
  }


  // Handle
  const handleInputChange = () => {
    const textInput = document.getElementById('inputText').value
    const message = {
      facebookId: props.user.facebookId,
      messageBody: textInput,
      time: new Date()
    }
    setMessageToSend(message)
  }

  const handleSendMessage = event => {
    event.preventDefault()
    console.log('message: ', messageToSend)
    // Check if the user is logged
    // TODO: to improve, easy to hack atm...
    if (props.user && props.user.facebookId && props.user.name) {
      socket.emit('newMessage', messageToSend)
    }
    // Reset the value of the input when the message is sent
    document.getElementById('inputText').value = ''
  }

  return (
    <InputContainer>
      <InputText id='inputText' onKeyDown={clickOnSend} type="text" onChange={handleInputChange} placeholder='Type your message here...' />
      <SubmitButton id='submitButton' onClick={handleSendMessage}>
        <span><b>Send !</b></span>
      </SubmitButton>
    </InputContainer>
  )
}

export default ChatInputContainer