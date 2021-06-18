import React, { Component } from 'react';
import {Spinner} from 'react-bootstrap';

class LoaderComponent extends Component {
    render() {
        return (
            <>
                <Spinner animation="grow" variant="dark" />
            </>
        );
    }
}

export default LoaderComponent;