import React from 'react'
import styled from 'styled-components'
// Components
import ChatMessageContainer from './ChatMessages/MessagesContainer'
import ChatInputContainer from './ChatInput/ChatInputContainer'

// Style
const ChatGeneralContainerSection = styled.section`
  //border: 1px solid green;
`

const ChatGeneralContainer = () => {
    return(
        <ChatGeneralContainerSection>
            <ChatMessageContainer />
            <ChatInputContainer />
        </ChatGeneralContainerSection>
    )
}

export default ChatGeneralContainer