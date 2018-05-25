import React, {Component} from 'react';


class Card extends Component {
    render() {
        var dogs = this.props.data.map()
        return (
            <button onClick={this.props.handleDelete}>Delete</button>
        );
    }
}






export default Card;