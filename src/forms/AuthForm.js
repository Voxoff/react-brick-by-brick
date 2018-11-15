import React from 'react';
import { Form, Checkbox, Button } from 'semantic-ui-react'


class AuthForm extends React.Component {

  state = {
    login: true,
    username: "",
    password: "",
    tc: false,
  }

  showLogin = event => {
    this.setState({
      login: true
    })
  }

  showSignUp = event => {
    this.setState({
      login: false
    })
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  toggleTnC = event => {
    this.setState({
      tc: !this.state.tc
    })
  }

  submitForm = event => {
    event.preventDefault()
    const { login, username, password, tc } = this.state

    if ( !login && !tc ) {
      alert("To create an account with us, you need to agree to our Terms and Conditions")
    } else {
      login ?
      // this.props.submitLogin(username, password)
      console.log("I'm logging in")
      :
      // this.props.submitSignUp(username, password)
      console.log("I'm signing up")
    }
  }

  render() {
    const { login, username, password, tc } = this.state
    const { showLogin, showSignUp, handleInputChange, toggleTnC, submitForm } = this

    console.log("AuthForm state:", this.state)

    return (
      <React.Fragment>
        <Button.Group>
          <Button
            active={login}
            onClick={showLogin}
          >
            Login
          </Button>
          <Button.Or />
          <Button
            active={!login}
            onClick={showSignUp}
          >
            Sign Up
          </Button>
        </Button.Group>
        <br/><br/>
        <Form onSubmit={submitForm} >
          <Form.Field>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            {
              login ?
              <br/>
              :
              <Checkbox
              label='I agree to the Terms and Conditions'
              checked={tc}
              onClick={ e => {
                e.preventDefault()
                this.toggleTnC()
              }}
              />
            }
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </React.Fragment>

    )
  }
}

export default AuthForm
