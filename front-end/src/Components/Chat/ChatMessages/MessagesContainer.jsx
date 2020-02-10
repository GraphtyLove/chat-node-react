import React from 'react'
import styled from 'styled-components'
// Components
import MessageUnique from './MessageUnique'

//Style
const ChatBox = styled.section`
    width: 90vw;
    height: 70vh;
    background: white;
    //border: 1px solid red;
    padding: 20px;
    -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;
    -moz-box-shadow:    3px 3px 8px 3px #ccc;
    -webkit-box-shadow: 3px 3px 8px 3px #ccc;
    box-shadow:         3px 3px 8px 3px #ccc;
    overflow: scroll;
`


const ChatMessageContainer = props => {
    // !!! DEBUG ZONE to delete !!!
    const senderFake = {
        name: 'Vincent',
        picture: 'https://scontent.fcrl2-1.fna.fbcdn.net/v/t1.0-9/66497304_2472647389445246_5845131481160089600_o.jpg?_nc_cat=103&_nc_ohc=LYPm7zWghj8AX8jIHRX&_nc_ht=scontent.fcrl2-1.fna&oh=5f2ca7511e2022c96c118dcce43f09d2&oe=5EC77397'
    }
    const messageFakeMax = {
        body: 'Hey Vinc, ça va ou quoi?',
        date: '10/02/2020',
        time: '12h15'
    }
        const messageFakeVincent = {
        body: 'Yo max!',
        date: '10/02/2020',
        time: '12h17'
    }

    return(
        <ChatBox>
            <MessageUnique isSentByUser={ true } user={ props.user } message={ messageFakeMax }/>
            <MessageUnique isSentByUser={ false } user={ senderFake } message={ messageFakeVincent } />
            <MessageUnique isSentByUser={ false } user={ senderFake } message={ messageFakeVincent } />
            <MessageUnique isSentByUser={ false } user={ senderFake } message={ messageFakeVincent } />
            <MessageUnique isSentByUser={ false } user={ senderFake } message={ messageFakeVincent } />
            <MessageUnique isSentByUser={ false } user={ senderFake } message={ messageFakeVincent } />
            <MessageUnique isSentByUser={ false } user={ senderFake } message={ messageFakeVincent } />
            <MessageUnique isSentByUser={ false } user={ senderFake } message={ messageFakeVincent } />
            <MessageUnique isSentByUser={ false } user={ senderFake } message={ messageFakeVincent } />
            <MessageUnique isSentByUser={ false } user={ senderFake } message={ messageFakeVincent } />
            <MessageUnique isSentByUser={ false } user={ senderFake } message={ messageFakeVincent } />
            <MessageUnique isSentByUser={ false } user={ senderFake } message={ messageFakeVincent } />
            <MessageUnique isSentByUser={ false } user={ senderFake } message={ messageFakeVincent } />
            <MessageUnique isSentByUser={ false } user={ senderFake } message={ messageFakeVincent } />
            <MessageUnique isSentByUser={ false } user={ senderFake } message={ messageFakeVincent } />
        </ChatBox>
    )
}

export default ChatMessageContainer