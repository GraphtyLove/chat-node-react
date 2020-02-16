import React from 'react'
import FacebookLogin from 'react-facebook-login';
import Particles from 'react-particles-js';
// import GoogleLogin from 'react-google-login';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000')

// Style
const loginContainer = {
    height: '98vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}


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
        <section style={loginContainer}>
            <Particles
                className='TEST'
                params={{
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    // "interactivity": {
                    //     "detect_on": "canvas",
                    //     "events": {
                    //         "onhover": {
                    //             "enable": true,
                    //             "mode": "grab"
                    //         },
                    //         "onclick": {
                    //             "enable": true,
                    //             "mode": "push"
                    //         },
                    //         "resize": true
                    //     },
                    //     "modes": {
                    //         "grab": {
                    //             "distance": 140,
                    //             "line_linked": {
                    //                 "opacity": 1
                    //             }
                    //         },
                    //         "bubble": {
                    //             "distance": 400,
                    //             "size": 40,
                    //             "duration": 2,
                    //             "opacity": 8,
                    //             "speed": 3
                    //         },
                    //         "repulse": {
                    //             "distance": 200,
                    //             "duration": 0.4
                    //         },
                    //         "push": {
                    //             "particles_nb": 4
                    //         },
                    //         "remove": {
                    //             "particles_nb": 2
                    //         }
                    //     }
                    // }
                }}
            />
            <FacebookLogin
                appId="829888337524160"
                fields="name,email,picture"
                icon="fa-facebook"
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