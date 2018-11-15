import React from 'react'
import { Grid } from 'semantic-ui-react'

import AuthForm from '../forms/AuthForm'

class HomePage extends React.Component {

  state = {

  }

  render() {
    return (
      <Grid>
        <Grid.Row id="hpage-header">
          <Grid.Column>

            HEADER

          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="hpage-description">
          <Grid.Column>

            DESCRIPTION

          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="hpage-auth-form">
          <Grid.Column>

            <AuthForm />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default HomePage
