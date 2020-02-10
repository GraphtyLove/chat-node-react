import React from 'react'
import styled from 'styled-components'
// Components
import MessageUnique from './MessageUnique'

//Style
const ChatBox = styled.section`
    width: 90vw;
    height: 80vh;
    background: white;
    //border: 1px solid red;
    padding: 5px 10px;
    -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;
    -moz-box-shadow:    3px 3px 8px 3px #ccc;
    -webkit-box-shadow: 3px 3px 8px 3px #ccc;
    box-shadow:         3px 3px 8px 3px #ccc;
`


const ChatMessageContainer = () => {

    return(
        <ChatBox className='ChatMessageContainer'>
            <MessageUnique isSentByUser={ true } />
            <MessageUnique isSentByUser={ false } />
        </ChatBox>
    )
}

export default ChatMessageContainer