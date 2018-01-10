import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const PasswordReinitForm = () => (
    <div className='login-form'>
        {
    }
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
        >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='orange' textAlign='center'>
                    <Image
                        height='80'
                        width='80'
                        circular
                        src={require('./img/Sloth.png')} />
                    {' '}Réinitialisez votre mot de passe
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Ancien mot de passe'
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Nouveau mot de passe'
                            type='password'
                        />

                        <Button color='orange' fluid size='large'>Login</Button>
                    </Segment>
                </Form>
                <Message>
                    Vous êtes nouveau ? <a href='#'>S'inscrire</a>
                </Message>
            </Grid.Column>
        </Grid>
    </div>
)

export default PasswordReinitForm