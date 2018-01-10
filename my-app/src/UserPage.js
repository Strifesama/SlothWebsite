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
import './SectionPrimary.css'

const FixedMenu = () => (
    <Menu fixed='top' size='large' >
        <Container>
            <Menu.Item as='a' active><i className="large home icon">Sloth</i></Menu.Item>
            <Menu.Item as='a'>Vue d'ensemble</Menu.Item>
            <Menu.Item as='a'>Objets</Menu.Item>
            <Menu.Item as='a'>Sommeil</Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Button as='a' primary>Se déconnecter</Button>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
);

export default class UserPage extends Component {
    state = {};

    hideFixedMenu = () => this.setState({ visible: false });
    showFixedMenu = () => this.setState({ visible: true });

    render() {
        const { visible } = this.state;

        return (
            <div >
                { visible ? <FixedMenu /> : null }

                <Visibility
                    onBottomPassed={this.showFixedMenu}
                    onBottomVisible={this.hideFixedMenu}
                    once={false}
                >
                    <div className="BackgroundPattern">
                        <Container >
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item as='a' active><Icon name="large home icon"></Icon>Sloth</Menu.Item>
                                <Menu.Item as='a'>Vue d'ensemble</Menu.Item>
                                <Menu.Item as='a'>Objets</Menu.Item>
                                <Menu.Item as='a'>Sommeil</Menu.Item>
                                <Menu.Menu position='right'>
                                    <Menu.Item className='Facture'>
                                        <Button as='a'>Ma facture</Button>
                                    </Menu.Item>
                                    <Menu.Item position='right'>
                                        <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Se déconnecter</Button>
                                    </Menu.Item>
                                </Menu.Menu>
                            </Menu>
                        </Container>

                        <Container text>

                            <Header
                                as='h1'
                                content="Panneau d'utilisateur"
                                inverted
                                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '0.5em' }}
                            />
                        </Container>
                    </div>

                </Visibility>
                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >

                    <p style={{ fontSize: '1.33em' }} >
                        Récapitulatif de vos objets </p>
                </Divider>


                <Segment style={{ padding: '8em 0em' }} >
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <div>
                                    <Header as='h2' icon textAlign='center'>
                                        <Icon name='checkmark box' circular />
                                        <Header.Content>
                                            Vos objets connectés actuellement
                                        </Header.Content>
                                    </Header>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div>
                                    <Header as='h2' icon textAlign='center'>
                                        <Icon name='lightbulb' circular />
                                        <Header.Content>
                                            Vos lampes
                                        </Header.Content>
                                    </Header>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Segment clearing>
                            <Header inverted attached="top" as="h3">Liste complète</Header>
                            <Segment.Group>
                                <List textAlign={"center"}>
                                    <List.Item>
                                        <List.Icon name="large lightbulb"/>
                                        <List.Content style={{ fontSize: '1.33em' }}>Lampe Phillips HUE</List.Content>
                                    </List.Item>
                                </List>
                                <List>
                                    <List.Item>
                                        <List.Icon name="large lightbulb"/>
                                        <List.Content style={{ fontSize: '1.33em' }}>Lampe Phillips HUE</List.Content>
                                    </List.Item>
                                </List>
                                <List>
                                    <List.Item>
                                        <List.Icon name="large lightbulb"/>
                                        <List.Content style={{ fontSize: '1.33em' }}>Lampe Phillips HUE</List.Content>
                                    </List.Item>
                                </List>
                            </Segment.Group>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </div>
        )
    }
}