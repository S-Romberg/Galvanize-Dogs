import React, {Component} from 'react';


class Create extends Component {
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input type="text" value={this.props.dogName} onChange={this.handleChange} />
            </label>
            <label>
              Comment
              <input type="text" value={this.props.comment} onChange={this.handleChange} />
            </label>
            <label>
              Picture (link)
              <input type="text" value={this.props.picture} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )
    }
}






export default Create;