import * as React from 'react';
import classNames from 'classnames';

export default function LoginForm(props) {
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLogin, setIsLogin] = React.useState(true);
    const [isRegister, setIsRegister] = React.useState(false);
   

   let onSubmitLogin = (e) => {
        e.preventDefault();
        console.log(email, password)
       props.onLogin(e, email, password);
    };

   let onSubmitRegister = (e) => {
        e.preventDefault();
        props.onRegister(e, firstname, lastname, email, password);
    };

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
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="mb-2 form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="mb-2 form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button type="submit" className="mt-2 btn btn-primary" onClick={onSubmitLogin}>Login</button>
                                </div>
                            )}
                            {isRegister && (
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="firstname">First name</label>
                                        <input type="text" className="mb-2 form-control" id="firstname" placeholder="Enter firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname">Last name</label>
                                        <input type="text" className="mb-2 form-control" id="lastname" placeholder="Enter lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="mb-2 form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="mb-2 form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button type="submit" className="mt-2 btn btn-primary" onClick={onSubmitRegister}>Register</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

    