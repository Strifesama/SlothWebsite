import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react'

export default class UserPage extends Component{
    render(){
        <div>
            <Container>
                <Menu inverted pointing secondary size='small'>
                    <Menu.Item as='a' active>Sloth</Menu.Item>
                    <Menu.Item as='a'>Vue d'ensemble</Menu.Item>
                    <Menu.Item as='a'>Objets</Menu.Item>
                    <Menu.Item as='a'>Sommeil</Menu.Item>
                    <Menu.Item position='right'>
                        <Button as='a' inverted style={{ marginLeft: '0.5em' }}>se déconnecter</Button>
                    </Menu.Item>
                </Menu>
            </Container>
        </div>
    }
}