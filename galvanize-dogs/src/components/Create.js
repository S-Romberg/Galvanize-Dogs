import React, {Component} from 'react';
import {Input, Button, Modal} from 'semantic-ui-react';

class Create extends Component {

    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <Modal
                trigger={<Button onClick={this.handleOpen}>Upload Your Pup</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
            >
                <Modal.Actions>
                    <h3>Add a Good Doggo</h3>
                    <form id='form' onSubmit={this.props.handleSubmit}>
                            <label>

                            <Input name='dogName' placeholder='Dog Name' type="text" value={this.props.dogName} onChange={this.props.handleChange} />
                            </label>
                            <label>
                            
                            <Input name='comment' placeholder='Comment' type="text" value={this.props.comment} onChange={this.props.handleChange} />
                            </label>
                            <label>
                    
                            <Input name='imgURL' placeholder='Image' type="text" value={this.props.imgURL} onChange={this.props.handleChange} />
                            </label>
                            <Button type="submit" value="Submit">Submit</Button>
                        </form>
                </Modal.Actions>
            </Modal>
        )
    }
}






export default Create;