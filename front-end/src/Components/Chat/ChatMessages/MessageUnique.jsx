import React from 'react'

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
const messageBodyBox = {
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
    WebkitBorderRadius: '10px 10px 3px 10px',
    MozBorderRadius: '10px 10px 3px 10px',
    borderRadius: '10px 10px 3px 10px',
}
const messageBodySomeoneElse = {
    background: 'darkgrey',
    WebkitBorderRadius: '3px 10px 10px 10px',
    MozBorderRadius: '3px 10px 10px 10px',
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
    WebkitBorderRadius: '50%',
    MozBorderRadius: '50%',
    borderRadius: '50%',
    height: '40px',
    width: '40px'
}

const MessageUnique = props => {
    const dateRaw = new Date(props.message.time)
    const formatedDate = `${dateRaw.getDate()}/${(dateRaw.getMonth() + 1)}/${dateRaw.getFullYear()}`
    const formatedTime = dateRaw.getHours() + ':' + dateRaw.getMinutes()

    return (
        <div style={props.isSentByUser ? messageContainerUser : messageContainerSomeoneElse}>
            <div style={props.isSentByUser ? messageBoxUser : messageBoxSomeoneElse}>
                {props.isSentByUser
                    ? <div style={{ ...messageBodyBox, ...messageBodyUser }}><p style={paragraph}> {props.message.messageBody} </p></div>
                    : <img src={props.message.user.pictureUrl} alt={props.message.user.name} style={UserImage} />
                }
                {props.isSentByUser
                    ? <img src={props.message.user.pictureUrl} alt={props.message.user.name} style={UserImage} />
                    : <div style={{ ...messageBodyBox, ...messageBodySomeoneElse }}><p style={paragraph}>{props.message.messageBody}</p></div>
                }
            </div>
            <time style={timeSpan}>Sent by {props.message.user.name} the {formatedDate} at {formatedTime}</time>
        </div>
    )
}

export default MessageUnique