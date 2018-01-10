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
import ModalSignIn from "./ModalSignIn";

const FixedMenu = () => (
    <Menu fixed='top' size='large' >
        <Container>
            <Menu.Item as='a' active>Sloth</Menu.Item>
            <Menu.Item as='a'>Acheter</Menu.Item>
            <Menu.Item as='a'>Fonctionalités</Menu.Item>
            <Menu.Item as='a'>Nous contacter</Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item className='item'>
                    <Button as='a'>S'identifier</Button>
                </Menu.Item>
                <Menu.Item>
                    <Button as='a' primary>S'inscrire</Button>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
);

export default class HomepageLayout extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ visible: false });
    showFixedMenu = () => this.setState({ visible: true });

    render() {
        const { visible } = this.state

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
                                <Menu.Item as='a' active>Sloth</Menu.Item>
                                <Menu.Item as='a'>Achetez</Menu.Item>
                                <Menu.Item as='a'>Fonctionnalité</Menu.Item>
                                <Menu.Item as='a'>Nous contacter</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted onClick={ModalSignIn}>S'identifier</Button>
                                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>S'inscrire</Button>
                                </Menu.Item>
                            </Menu>
                        </Container>
                    <div className="Logo">
                    <Grid.Column floated='center' width={4}>
                        <Image
                            padding-up="100"
                            centered
                            height="300"
                            width="300"
                            circular

                            src={require('./img/Sloth.png')}/>
                    </Grid.Column>
                    </div>
                        <Container text>

                            <Header
                                as='h1'
                                content="Premier bracelet connecté d'inactivité"
                                inverted
                                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
                            />
                            <Header
                                as='h2'
                                content='Configurez une fois votre intérieur grâce à notre solution et laissez faire.'
                                inverted
                                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                            />
                            <Button primary size='huge'>
                                Téléchargement
                                <Icon name='right arrow' />
                            </Button>
                        </Container>
                </div>

                </Visibility>

                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>Connectez vous, paramétrez, laissez faire.</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    Notre solution est une association entre un bracelet connecté et une application mobile.
                                    Paramétrez votre intérieur une fois pour toute, enfilez votre bracelet et laissez votre maison bouger à votre place.
                                </p>
                               </Grid.Column>
                            <Grid.Column floated='right' width={6}>

                                <Image
                                    bordered
                                    rounded
                                    size='large'
                                    src={require('./img/Sloth_Background.png')}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column  textAlign='center'>
                                <Header as='h3'  textAlign='center' style={{ fontSize: '2em'}}>Téléchargez notre application sur ces plateformes de téléchargement mobile.</Header>
                                <Grid.Column width={5} >
                                <img width="300" src={require('./img/google-play-badge.svg')}/>
                                <img width="300" src={require('./img/app-store-badge.svg')}/>
                                </Grid.Column>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Container text>
                        <Header as='h3' style={{ fontSize: '2em' }}>Nos Fonctionalités</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            <ul>
                                -Connectivité Bluetooth
                            </ul>
                            <ul>
                                -Serveur Openhab (solution opensource de centralisation d'objets connectés)
                            </ul>
                            <ul>
                                -Contrôle de vos lampes connectées, de l'intensité de la lumière à la couleur de vos lampes chromatiques
                            </ul>
                            <ul>
                                -Contrôle sur l'activité de vos objets connectés en allant dormir ou en vous réveillant
                            </ul>
                            <ul>
                                -Un suivi et des conseils pendant votre sommeil
                            </ul>
                            <ul>
                                -Le plaisir retrouvé de ne rien avoir à faire
                            </ul>
                        </p>
                        <Divider
                            as='h4'
                            className='header'
                            horizontal
                            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                        >
                            <a href='#'>Nous contacter</a>
                        </Divider>
                        <Header as='h3' style={{ fontSize: '2em' }}>Un seul bracelet pour les contrôler tous</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Si vous êtes enthousiaste concernant notre solution, nous vous invitons à appuyer sur ce bouton pour dès à présent la télécharger.
                        </p>
                        <Button primary as='a' size='large'>Téléchargement</Button>
                    </Container>
                </Segment>
                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='About' />
                                    <List link inverted>
                                        <List.Item as='a'>Nous contacter</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Services' />
                                    <List link inverted>
                                        <List.Item as='a'>Notre FAQ</List.Item>

                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Header as='h4' inverted>Rejoignez nous sur les réseaux sociaux</Header>
                                    <p>
                                        <i className="big twitter icon"></i>
                                        <i className="big facebook icon"></i>
                                        <i className="big google icon"></i>
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </div>
        )
    }
}