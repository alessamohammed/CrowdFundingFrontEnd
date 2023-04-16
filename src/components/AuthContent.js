import * as React from 'react';

import { request, setAuthToken } from '../axios_helper';
import LoginForm from './LoginForm';
import Header from './Header';

export default class AuthContent extends React.Component {

    onLogin = (e, email, password) => {
        request(
            "POST",
            "/login",
            { email: email, password: password }
        ).then((response) => {
                this.setState({ componentToShow: "messages" });
                setAuthToken(response.data.token);
                window.location.href = "/campaigns";
        }).catch((error) => {
            console.log(error);
        });
    };

    // onRegister take firstName, lastName, username, password
    onRegister = (e, firstName, lastName, email, password) => {
        request(
            "POST",
            "/register",
            { firstName: firstName, lastName: lastName, email: email, password: password }
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
                <div className='mt-5'>
                <LoginForm onLogin={this.onLogin} onRegister={this.onRegister} />
                </div>
        );
    };
};