import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FormReverseString from './components/form_reverse_string';
import FormBackendRequest from "./components/form_backend_request";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="container">
                    <br/>
                    <FormReverseString/>
                    <FormBackendRequest/>
                </div>
            </div>
        );
    }
}

export default App;
