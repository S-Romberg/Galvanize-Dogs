import React, {Component} from 'react';


class Create extends Component {

    render() {
        return (
        <form onSubmit={this.props.handleSubmit}>
            <label>
              Name
              <input name='dogName' type="text" value={this.props.dogName} onChange={this.props.handleChange} />
            </label>
            <label>
              Comment
              <input name='comment' type="text" value={this.props.comment} onChange={this.props.handleChange} />
            </label>
            <label>
              Picture (link)
              <input name='imgURL' type="text" value={this.props.imgURL} onChange={this.props.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )
    }
}






export default Create;