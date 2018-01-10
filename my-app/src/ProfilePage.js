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
    Card

} from 'semantic-ui-react'
import './SectionPrimary.css'

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


export default class UserProfile extends Component {
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
                    </div>
                </Visibility>
                <Container text>
                    <Header
                        as='h1'
                        content="Mon profil Sloth"
                        style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: '1em', marginTop: '1em' }}
                    />
                </Container>
                <Grid.Column width={"2"}/>
                    <Grid.Column width={"8"}>
                <Container center aligned>
                    <Card centered>
                        <Image
                            marginTop={"20"}
                            centered
                            height="150"
                            width="150"
                            circular
                            src={require('./img/Sloth.png')}/>
                        <Card.Content>
                            <Card.Header>
                                Hugues-jêrome
                            </Card.Header>
                            <Card.Meta>
                                    <span className='date'>
                                        A rejoint Sloth en 2018
                                     </span>
                            </Card.Meta>
                            <Card.Description>

                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='setting' />
                                6 objets connectés
                            </a>
                        </Card.Content>
                    </Card>
                </Container>
                    </Grid.Column>
                    <Grid.Column width={"2"}/>
                    <Segment style={{ padding: '8em 0em' }} >
                        <Grid container stackable verticalAlign='middle'>
                            <Grid.Row>
                                <Grid.Column width={4}>
                                    <div>
                                        {/* Ici tu mets les forms */}

                                    </div>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div>
                                        {/* Là aussi */}

                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
            </div>
        )
    }
}