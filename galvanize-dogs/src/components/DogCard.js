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
                <div className='upVote'>
                    <p>{dog.rating}/10 </p>
                    <button value={dog.rating} name={dog.id} onClick={this.props.upVote}>&uarr; vote</button>
                </div>
                <button  name = {dog.id} onClick={this.props.handleDelete}>Delete</button>
            </Card.Content>
        </Card>
        )
        })
        
    
    return (
            <div className='dogContainer'>
                {dogs}
            </div>
        )
    }
}


export default DogCard
