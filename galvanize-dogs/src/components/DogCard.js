import React, {Component} from 'react';

import { Card, Image } from 'semantic-ui-react'


class DogCard extends Component {

    render() {    
        var dogs = this.props.data.map(dog => {
        return (
        <Card key={dog.id}>
            <Image src={dog.imgURL} />
            <Card.Content>
                <Card.Header>
                    {dog.dogName}
                </Card.Header>
                <Card.Description>
                    {dog.comment}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <p>{dog.rating}/10 </p>
                <button onClick={this.props.upVote}></button>
                <button name = {dog.id} onClick={this.props.handleDelete}>Delete</button>
            </Card.Content>
        </Card>
        )
        })
        
    
    return (
            <div>
                {dogs}
            </div>
        )
    }
}


export default DogCard
