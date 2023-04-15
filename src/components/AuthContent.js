import * as React from 'react';

import { request } from '../axios_helper';
import LoginForm from './LoginForm';
import { Button } from 'react-bootstrap';

export default class AuthContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            componentToShow: "welcome"
        };
    };

    login = () => {
        this.setState({
            componentToShow: "login"
        });
    }

    register = () => {
        this.setState({
            componentToShow: "login"
        });
    }

    logout = () => {
        this.setState({
            componentToShow: "welcome"
        });
    }

    onLogin = (e, username, password) => {
        request(
            "POST",
            "/login",
            { login: username, password: password }
        ).then((response) => {
                this.setState({ componentToShow: "messages" });
        }).catch((error) => {
            console.log(error);
        });
    };

    // onRegister take firstName, lastName, username, password
    onRegister = (e, firstName, lastName, username, password) => {
        request(
            "POST",
            "/register",
            { firstName: firstName, lastName: lastName, login: username, password: password }
        ).then((response) => {
            this.setState({ componentToShow: "messages" });
        }).catch((error) => {
            console.log(error);
        });
    };



    componentDidMount() {
       request(
        "GET",
        "/campaign/all",
        {}
       ).then((response) => {
            this.setState({
            data: response.data
            });
         });
    };

    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.login}>Login</Button>
                {this.state.componentToShow === "welcome" && (
                        <h1>Welcome to the Auth App</h1>
                )}
                {this.state.componentToShow === "login" && (
                        <LoginForm onLogin={this.onLogin} onRegister={this.onRegister} />
                )}
            </div>
        );
    };
};