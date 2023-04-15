import * as React from 'react';
import classNames from 'classnames';

// function with props
export default function LoginForm(props) {
    // firstname, lastname, login, password, onLogin, onRegister
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLogin, setIsLogin] = React.useState(true);
    const [isRegister, setIsRegister] = React.useState(false);
   

   let onSubmitLogin = (e) => {
        e.preventDefault();
       props.onLogin(e, login, password);
    };

   let onSubmitRegister = (e) => {
        e.preventDefault();
        props.onRegister(e, firstname, lastname, login, password);
    };


    // onChangeHandler = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }
    
    //  onSubmitHandler = (event) => {
    //     event.preventDefault();
    //     this.props.onSubmit(this.state);
    // }

    // return JSX
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <a className={classNames("nav-link", { active: isLogin })} href="#" onClick={() => { setIsLogin(true); setIsRegister(false); }}>Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className={classNames("nav-link", { active: isRegister })} href="#" onClick={() => { setIsLogin(false); setIsRegister(true); }}>Register</a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            {isLogin && (
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="login">Login</label>
                                        <input type="text" className="form-control" id="login" placeholder="Enter login" value={login} onChange={(e) => setLogin(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={onSubmitLogin}>Login</button>
                                </div>
                            )}
                            {isRegister && (
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="firstname">Firstname</label>
                                        <input type="text" className="form-control" id="firstname" placeholder="Enter firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname">Lastname</label>
                                        <input type="text" className="form-control" id="lastname" placeholder="Enter lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="login">Login</label>
                                        <input type="text" className="form-control" id="login" placeholder="Enter login" value={login} onChange={(e) => setLogin(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={onSubmitRegister}>Register</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

    