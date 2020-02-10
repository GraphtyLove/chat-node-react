import React from 'react'
import styled from 'styled-components'


// Style
const MessageBoxFromSomeoneElse = styled.div`
  background: darkgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  padding: 3px 5px;
  -webkit-border-radius: 3px 10px 10px 10px;-moz-border-radius: 3px 10px 10px 10px;border-radius: 3px 10px 10px 10px;
  margin-bottom: 10px;
  color: white;
`

const MessageBoxFromUser = styled.div`
  background: cornflowerblue;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  padding: 3px 5px;
  -webkit-border-radius: 10px 10px 3px 10px;-moz-border-radius: 10px 10px 3px 10px;border-radius: 10px 10px 3px 10px;
  margin-bottom: 10px;
  color: white;
  margin-left: auto;
`



const MessageUnique = props => {

    return(
        props.isSentByUser
            ? <MessageBoxFromSomeoneElse><p>This is a message sent by someone else</p></MessageBoxFromSomeoneElse>
            : <MessageBoxFromUser><p>This is a message</p></MessageBoxFromUser>

    )
}

export default MessageUnique