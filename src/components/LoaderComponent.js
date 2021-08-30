import React, { Component } from 'react';
import {Spinner} from 'react-bootstrap';

class LoaderComponent extends Component {
    render() {
        return (
            <div className={'spinner'}>
                <Spinner animation="grow" variant="dark" />
            </div>
        );
    }
}

export default LoaderComponent;