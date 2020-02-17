import React, { useState } from 'react'
import styled from 'styled-components'
// Components
import MessageUnique from './MessageUnique'
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000')

//Style
const ChatBox = styled.section`
    width: 70vw;
    height: 70vh;
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -moz-box-shadow:    3px 3px 8px 3px rgba(0%, 0%, 0%, 0.1);
    -webkit-box-shadow: 3px 3px 8px 3px rgba(0%, 0%, 0%, 0.1);
    box-shadow:         3px 3px 8px 3px rgba(0%, 0%, 0%, 0.1);
    overflow: scroll;
`


const ChatMessageContainer = props => {

    const [messages, setMessages] = useState([])

    // Store new messages in messages
    socket.on('newMessageReceived', messageData => {
        if (messageData && messageData.user) {
            messageData.isSentByUser = messageData.user.name === props.user.name
            setMessages([...messages, messageData])
        }
    })

    return (
        <ChatBox id='chatBox'>
            {messages && messages.map((message, i) => <MessageUnique key={i} isSentByUser={message.isSentByUser} message={message} />)}
        </ChatBox>
    )
}

export default ChatMessageContainer