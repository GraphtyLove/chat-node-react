import React from 'react'
import styled from 'styled-components'
// Components
import ChatMessageContainer from './ChatMessages/MessagesContainer'
import ChatInputContainer from './ChatInput/ChatInputContainer'

// Style
const ChatGeneralContainerSection = styled.section`
  //border: 1px solid green;
`

const ChatGeneralContainer = props => {
    return(
        <ChatGeneralContainerSection>
            <ChatMessageContainer user={ props.user } />
            <ChatInputContainer />
        </ChatGeneralContainerSection>
    )
}

export default ChatGeneralContainer