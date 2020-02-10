import React, { Fragment } from 'react'

// Style
const messageContainerUser = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: '10px'
}
const messageContainerSomeoneElse = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '15px'
}
const messageBoxUser = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
}
const messageBoxSomeoneElse = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
}
const messageBody = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '200px',
    padding: '3px 5px',
    color: 'white',
    margin: '0 5px'
}
const messageBodyUser = {
    background: 'cornflowerblue',
    webkitBorderRadius: '10px 10px 3px 10px',
    mozBorderRadius: '10px 10px 3px 10px',
    borderRadius: '10px 10px 3px 10px',
}
const messageBodySomeoneElse = {
    background: 'darkgrey',
    webkitBorderRadius: '3px 10px 10px 10px',
    mozBorderRadius: '3px 10px 10px 10px',
    borderRadius: '3px 10px 10px 10px',
}
const timeSpan = {
    marginTop: '5px',
    fontSize: '9px',
    color: 'grey',
    fontStyle: 'italic'
}
const paragraph = {
    margin: '5px'
}
const UserImage = {
    webkitBorderRadius: '50%',
    mozBorderRadius: '50%',
    borderRadius: '50%',
    height: '40px',
    width: '40px'
}

const MessageUnique = props => {

    return(
        <div style={ props.isSentByUser ? messageContainerUser : messageContainerSomeoneElse }>
            <div style={ props.isSentByUser ? messageBoxUser : messageBoxSomeoneElse }>
                { props.isSentByUser
                    ? <div style={{ ...messageBody, ...messageBodyUser }}><p style={ paragraph }>{ props.message.body }</p></div>
                    : <img src={ props.user.picture } alt={ `Profile picture of ${props.user.name}` } style={ UserImage } />
                }
                { props.isSentByUser
                    ? <img src={ props.user.picture } alt={`Profile picture of ${props.user.name}`} style={ UserImage } />
                    : <div style={{ ...messageBody, ...messageBodySomeoneElse }}><p style={ paragraph }>{ props.message.body }</p></div>
                }
            </div>
            <time style={ timeSpan }>Message sent the {props.message.date} at {props.message.time}</time>
        </div>
    )
}

export default MessageUnique