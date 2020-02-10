import React from 'react'
import styled from 'styled-components'
// Components
import ChatInputText from './ChatInputText'
import ChatSubmitButton from './ChatSubmitButton'

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

const ChatInputConainer = () => {

    return(
            <InputContainer>
                <ChatInputText />
                <ChatSubmitButton />
            </InputContainer>
    )
}

export default ChatInputConainer