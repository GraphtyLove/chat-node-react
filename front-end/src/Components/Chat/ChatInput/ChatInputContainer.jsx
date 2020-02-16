import React, { useState } from 'react'
import styled from 'styled-components'
// import { subscribeToTimer } from '../../Api/Api'

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000')

// Style
const InputContainer = styled.section`
  width: 50%;
  height: 40px;
  //border: 1px solid red;
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

  // Socket
  const subscribeToMessage = (messageToSend, callback) => {
    socket.on('newMessageReceived', message => callback(null, message))
    socket.emit('subscribeToMessage', messageToSend)
  }

  // Handle
  const handleInputChange = () => {
    const textInput = document.getElementById('inpuText').value
    const message = {
      userId: props.user.name,
      messageBody: textInput,
      time: new Date()
    }
    setMessageToSend(message)
  }
  const handleSendMessage = event => {
    event.preventDefault()
    console.log('message: ', messageToSend)
    socket.emit('newMessage', messageToSend)
    // Reset the value of the input when the message is sent
    document.getElementById('inpuText').value = ''
  }





  return (
    <InputContainer>
      <InputText id='inpuText' type="text" onChange={handleInputChange} placeholder='Type your message here...' />
      <SubmitButton onClick={handleSendMessage}>
        <span><b>Send !</b></span>
      </SubmitButton>
    </InputContainer>
  )
}

export default ChatInputContainer