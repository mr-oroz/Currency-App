import { Button } from 'react-bootstrap';
import React, { Component } from 'react';

class ErrorComponent extends Component {
    render() {
        const { fetchRates } = this.props;
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    heidth: '200vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <h1>Error</h1>
                <Button onClick={() => { fetchRates() }} variant='dark mt-2 ml-2'>Обновить</Button>
            </div>
        );
    }
}

export default ErrorComponent;