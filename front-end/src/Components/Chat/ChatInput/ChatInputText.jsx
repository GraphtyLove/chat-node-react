import React from 'react'
import styled from 'styled-components'

// Style
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

const ChatInputText = () => {

    return(
        <InputText type="text"/>
    )
}

export default ChatInputText