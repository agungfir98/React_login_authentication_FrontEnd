import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const Daftar = ()=> {

    const[nama, setNama] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[alert, setAlert] = useState('');
    const[error, setError] = useState('');

    const ChangeNama = (e)=>{
        const value = e.target.value;
        setNama(value);
        setError('');
    };
    const ChangeEmail = (e)=> {
        const value = e.target.value;
        setEmail(value);
        setError('');
    };
    const ChangePassword = (e)=> {
        const value = e.target.value;
        setPassword(value);
        setError('');
    };
    const ClickDaftar = () =>{
        const data = {
            nama: nama,
            email: email,
            password: password
        };
        // console.log(data);
        axios.post('http://localhost:3001/Daftar', data)
        .then( (result) => {
            if (result){
                if (result.data){
                    setNama('')
                    setEmail('')
                    setPassword('')
                    setError('');
                    setAlert(result.data.message)
                    setTimeout( ()=>{
                        setAlert('')
                    }, 3000) 
                }
            }
            // console.log(result.data)
        })
        .catch( (err) => {
            setError(err.response.data.message)
            // console.log('error', err.response.data.message);
        })
    }

    return(
        <div style={{marginTop: "150px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <h2>Form pendaftaran</h2>
                                </div>
                                {
                                    error && (
                                        <div className="alert alert-warning">
                                            <p>{error}</p>
                                        </div>
                                    )
                                }
                                {
                                    alert && (
                                        <div className="alert alert-primary">
                                            <p>{alert}</p>
                                        </div>
                                    )
                                }
                                <div className="form-group">
                                    <label>Nama</label>
                                    <input type="nama" placeholder="Nama" className="form-control" value={nama} onChange={ChangeNama} />
                                </div>
                                
                                <div className="form-group">
                                    <label>Username/E-mail</label>
                                    <input type="email" placeholder="Username/E-mail" className="form-control" value={email} onChange={ChangeEmail} />
                                </div>
                                
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className="form-control" value={password} onChange={ChangePassword} />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <button className="btn btn-primary" onClick={ClickDaftar}>Daftar!</button>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <Link to="/" className="btn btn-warning">
                                            Batal
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Daftar;