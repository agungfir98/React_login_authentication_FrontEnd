import React, { useState }from 'react';
import {Link} from 'react-router-dom'

const Login = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const oncChangeUsername = (e) => {
        const value = e.target.value;
        setUsername(value)
    };
    const onchangePassword = (e) =>{
        const value = e.target.value;
        setPassword(value)
    };

    return(
        <div style={{marginTop: "200px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username/E-mail</label>
                                    <input type="email" placeholder="Username/E-mail" className="form-control" value={username} onChange={oncChangeUsername} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input placeholder="Password" type="password" className="form-control" value={password} onChange={onchangePassword} />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                    <button className="d-flex btn btn-primary">LOGIN SLUR!</button>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <Link to="/daftar" className="btn btn-primary">
                                            Daftar
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;