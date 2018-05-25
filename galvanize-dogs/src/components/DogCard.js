import React, {Component} from 'react';

import { Card, Icon, Image } from 'semantic-ui-react'


class DogCard extends Component {
    render() {
        return (
            <div>
            <Card>
                <Image src='/assets/images/avatar/large/matthew.png' />
                <Card.Content>
                    <Card.Header>
                        Matthew
      </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            Joined in 2015
        </span>
                    </Card.Meta>
                    <Card.Description>
                        Matthew is a musician living in Nashville.
      </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
      </a>
                </Card.Content>
            </Card>
                <Card>
                    <Image src='/assets/images/avatar/large/matthew.png' />
                    <Card.Content>
                        <Card.Header>
                            Matthew
      </Card.Header>
                        <Card.Meta>
                            <span className='date'>
                                Joined in 2015
        </span>
                        </Card.Meta>
                        <Card.Description>
                            Matthew is a musician living in Nashville.
      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 Friends
      </a>
                    </Card.Content>
                </Card>
            </div>






export default DogCard;
