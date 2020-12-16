import React from 'react'
import { TextInput, Button} from "grommet";
import {Link} from 'react-router-dom'; 


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameValue: '',
            passwordValue: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({usernameValue: event.target.value})
    }

    handlePasswordChange = (event) => {
        this.setState({passwordValue: event.target.value})
    }

    render() {
        return (
            <div>
            <TextInput
      placeholder="Username"
      value={this.state.usernameValue}
      onChange={this.handleUsernameChange}
    /> 
    <br/>
    <TextInput
      placeholder="Password"
      value={this.state.passwordValue}
      onChange={this.handlePasswordChange}
    />
    <br/>
    <Link to="/dashboard">
    <Button primary label="login" alignSelf="center"></Button>
    </Link>
    <Link to="/registration">
    <Button style={{marginLeft:10}} primary label="register" alignSelf="center"></Button>
    </Link>
    </div>
        )
    }
}

export default Login