import React, { useState, Fragment }from 'react';
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const[nama, setNama] = useState('');
    const[password, setPassword] = useState('');
    const[redirect, setRedirect] = useState(false);
    const[error, setError] = useState('');

    const oncChangeNama = (e) => {
        const value = e.target.value;
        setNama(value);
        setError('');
    };
    const onchangePassword = (e) =>{
        const value = e.target.value;
        setPassword(value);
        setError('');
    };
    const submitLogin = function() {
        const data = {
            nama: nama,
            password: password
        };
        axios.post('http://localhost:3001/Login',data)
        .then( result => {
            if (result) {
                localStorage.setItem('token', result.data.token);
                setRedirect(true);
            }
            // console.log(result.data.token);
        }).catch( err => {
            setError(err.response.data.message);
            setTimeout( ()=>{
                setError('')
            },3000);
        })
    }
    return(
        <Fragment>
            {
                redirect && (
                    <Redirect to="/Dashboard"/>
                )
            }
            <div style={{marginTop: "200px"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card p-4">
                                <div className="card-body">
                                    <div>
                                        <h2>Halaman Login</h2>
                                    </div>
                                    {
                                        error && (
                                            <div className="alert alert-warning">
                                                <p>{error}</p>
                                            </div>
                                        )
                                    }
                                    <div className="form-group">
                                        <label>Nama/E-mail</label>
                                        <input type="email" placeholder="Nama/E-mail" className="form-control" value={nama} onChange={oncChangeNama} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input placeholder="Password" type="password" className="form-control" value={password} onChange={onchangePassword} />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                        <button className="d-flex btn btn-primary" onClick={submitLogin}>LOGIN SLUR!</button>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <Link to="/daftar" className="btn btn-primary">
                                                Daftar
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <Link to="/lupa-password" className="small">
                                            Lupa password
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Login;