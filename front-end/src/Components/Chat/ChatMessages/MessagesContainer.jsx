import React, { useState } from 'react'
import styled from 'styled-components'
// Components
import MessageUnique from './MessageUnique'
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000')

//Style
const ChatBox = styled.section`
    width: 90vw;
    height: 70vh;
    background: white;
    padding: 20px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -moz-box-shadow:    3px 3px 8px 3px #ccc;
    -webkit-box-shadow: 3px 3px 8px 3px #ccc;
    box-shadow:         3px 3px 8px 3px #ccc;
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
        <ChatBox>
            {messages && messages.map((message, i) => <MessageUnique key={i} isSentByUser={message.isSentByUser} message={message} />)}
        </ChatBox>
    )
}

export default ChatMessageContainer