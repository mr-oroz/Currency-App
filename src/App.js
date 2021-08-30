import React from 'react';
import './App.css';
import axios from 'axios';
import ErrorComponent from './components/ErrorComponent';
import LoaderComponent from './components/LoaderComponent';
import ConvertComponent from './components/ConvertComponent';

class App extends React.Component {
    state = {
        rates: [],
        loading: true,
        error: false,
    }

    fetchRates = () => {
        axios.get(`http://data.fixer.io/api/latest?access_key=5e21cf2b766045cb9e9c95f3f116e69b&format=1`)
            .then(res => {
                this.setState({
                    rates: res.data.rates,
                    error: false,
                })
                console.log(res)
            })
            .catch(error => {
                this.setState({
                    error: true,
                })
            })
            .finally(() => {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    })
                }, 1000)
            })
    }

    componentDidMount() {
        this.fetchRates()
    }

    handleClickUpdate = () => {
        this.handleClikConvert();
    }

    render() {
        const {leftSelect, rigthSelect, formInput, result, rates, loading, error} = this.state;
        return (
            <>
                {error === true ? <ErrorComponent fetchRates={() => {
                    this.fetchRates()
                }}/> : (
                    <>
                        {loading === true ?
                            <LoaderComponent/> : (
                                <>
                                    <ConvertComponent rates={this.state.rates}/>
                                </>
                            )}
                    </>
                )}
            </>
        );
    }
}

export default App;