import React, { useState } from 'react'
import styled from 'styled-components'

// Style
const SubmitButton = styled.button`
  background: cornflowerblue;
  height: 105%;
  width: 7%;
  border: none;
  color: white;
  -webkit-border-radius: 0 10px 10px 0;-moz-border-radius: 0 10px 10px 0;border-radius: 0 10px 10px 0;
    -moz-box-shadow:    3px 3px 8px 3px #ccc;
  -webkit-box-shadow: 3px 3px 8px 3px #ccc;
  box-shadow:         3px 3px 8px 3px #ccc;
`

const ChatSubmitButtob = () => {

    return(
        <SubmitButton>
            <span><b>Send!</b></span>
        </SubmitButton>
    )
}

export default ChatSubmitButtob