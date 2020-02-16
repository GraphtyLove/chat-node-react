import React from 'react'
import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000')


const LoginScreen = props => {

    // Method to set if the user is connected or not (state of app.js)
    const setIsUserConnected = props.setIsUserConnected
    const setUser = props.setUser

    // Facebook
    const responseFacebook = response => {
        // Function setAuth from auth state (app.js)
        if (response && response.name && response.email && response.userID) {
            console.log(`User ${response.name} connected with facebook`)

            const user = {
                name: response.name,
                email: response.email,
                facebookId: response.userID,
                pictureUrl: response.picture.data.url
            }

            setUser(user)
            setIsUserConnected(true)

            socket.emit('userLogin', user)

        }
        else {
            alert('Facebook authentication failed.')
        }
    }

    // Google
    // const responseGoogleSuccess = () => console.log('google SUCCESS')
    // const responseGoogleFailure = () => console.log('google FAIL')

    return (
        <section className='loginSocial'>
            <FacebookLogin
                appId="829888337524160"
                fields="name,email,picture"
                callback={responseFacebook}
            />
            {/*<GoogleLogin*/}
            {/*    clientId="" //CLIENTID NOT CREATED YET*/}
            {/*    buttonText="LOGIN WITH GOOGLE"*/}
            {/*    onSuccess={responseGoogleSuccess}*/}
            {/*    onFailure={responseGoogleFailure}*/}
            {/*/>*/}

        </section>
    )
}

export default LoginScreen