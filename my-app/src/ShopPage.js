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

export default class My_Shop extends Component {
    render() {
        return (
<div className={"BackgroundPattern"}>
    <Header as='h2' style={{ fontSize: '2em', padding:'2em', fontFamily:"'MS Sans Serif', Geneva, sans-serif;" }}>
        Notre Boutique ne propose rien pour l'instant
    </Header>
    <Segment style={{ padding: '15em 0em' }} vertical>

                        <Card centered style={{height:"300px",width:"500px"}}>
                            <Image
                               paddingTop="10px"
                                centered
                                height="150"
                                width="150"
                                circular
                                src={require('./img/Sloth.png')}/>
                            <Card.Content>
                                <Card.Header>
                                    Notre offre de départ
                                </Card.Header>
                                <Card.Meta>
                                    <span className='date'>
                                        A venir.
                                     </span>
                                </Card.Meta>
                                <Card.Description>
                                    <Button color={"color"}>Soon !</Button>
                                </Card.Description>
                            </Card.Content>
                        </Card>
    </Segment>
    <Grid divided  stackable>
        <Grid.Row>
            <Grid.Column width={3}>
                <Header as='h4' content='About' />
                <List link >
                    <List.Item as='a'>Nous contacter</List.Item>
                </List>
            </Grid.Column>
            <Grid.Column width={3}>
                <Header as='h4' content='Services' />
                <List link >
                    <List.Item as='a'>Notre FAQ</List.Item>

                </List>
            </Grid.Column>
            <Grid.Column width={7}>
                <Header as='h4'>Rejoignez nous sur les réseaux sociaux</Header>
                <p>
                    <i className="big twitter icon"></i>
                    <i className="big facebook icon"></i>
                    <i className="big google icon"></i>
                </p>
            </Grid.Column>
        </Grid.Row>
    </Grid>

</div>
        )
    }
}