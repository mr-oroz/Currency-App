import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class ConvertComponent extends Component {
    state = {
        leftSelect: 'USD',
        rigthSelect: 'KGS',
        formInput: '',
        result: 0,
    }
    handleChange = (e) => {
        this.setState({
            formInput: e,
        })
    }
    handleClickReverse = (e) => {
        this.setState((v) => {
            return {
                leftSelect: v.rigthSelect,
                rigthSelect: v.leftSelect,
            };
        });
        this.handleClikConvert();
    }

    handleClikConvert = () => {
        let result = null
        const { leftSelect, rigthSelect, formInput } = this.state;
        const {rates} = this.props;
        if (leftSelect !== 'EUR' && rigthSelect !== 'EUR') {
            result = (formInput / rates[leftSelect]) * rates[rigthSelect]
        } else if (leftSelect === 'EUR' && rigthSelect !== 'EUR') {
            result = formInput * rates[rigthSelect]
        } else if (leftSelect !== 'EUR' && rigthSelect !== 'EUR') {
            result = formInput / rates[rigthSelect]
        }
        this.setState({
            result
        })
    }
    render() {
        const { formInput, rigthSelect, leftSelect, result } = this.state;
        const { rates } = this.props;
        const { handleChange, handleClikConvert, handleClickReverse } = this;
        return (
            <>
                <div className='center'>
                    <h1>КУРС КОНВЕРТИРОВАТЬ!</h1>
                    <Form>
                        <div className={'form-group'}>
                            <div style={{ display: 'flex' }}>
                                <Form.Control
                                    onChange={(e) => { handleChange(e.target.value) }}
                                    type="number" placeholder="Курс валюта..."
                                />
                                <span>{leftSelect}</span>
                            </div>
                            <div className='form-select'>
                                <select value={leftSelect} onChange={(e) => {
                                    this.setState({ leftSelect: e.target.value })
                                }
                                }>
                                    {[leftSelect, ...Object.keys(rates)].filter(v => {
                                        return rigthSelect !== v;
                                    }).map(v => {
                                        return <option value={v}>{v}</option>
                                    })}
                                </select>
                                <select value={rigthSelect} onChange={(e) => {
                                    this.setState({ rigthSelect: e.target.value })
                                }
                                }>
                                    {[rigthSelect, ...Object.keys(rates)].map(v => {
                                        return <option value={v}>{v}</option>
                                    })}
                                </select>
                            </div>
                            <Button variant='dark mt-2'
                                onClick={() => { handleClikConvert() }}
                                disabled={formInput === '' ? true : false}
                            >Convert</Button>
                            <Button onClick={(e) => handleClickReverse()} variant={'dark mt-2 ml-4'}>Reverse</Button>
                            <p>result sum: {result} {rigthSelect}</p>
                        </div>
                    </Form>
                </div>
            </>
        );
    }
}

export default ConvertComponent;