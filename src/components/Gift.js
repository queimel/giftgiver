import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

class Gift extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            person: '',
            present: ''
        }
    }
    
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <ControlLabel>Person</ControlLabel>
                        <FormControl 
                            className="input-person"
                            onChange={event => this.setState({ person: event.target.value })}>
                        </FormControl>

                        <ControlLabel>Present</ControlLabel>
                        <FormControl 
                            className="input-present"
                            onChange={event => this.setState({ present: event.target.value })}>
                        </FormControl>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Gift;