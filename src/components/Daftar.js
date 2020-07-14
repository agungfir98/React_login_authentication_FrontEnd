import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Daftar = ()=> {

    const[nama, setNama] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const ChangeNama = (e)=>{
        const value = e.target.value;
        setNama(value);
    };
    const ChangeEmail = (e)=> {
        const value = e.target.value;
        setEmail(value);
    };
    const ChangePassword = (e)=> {
        const value = e.target.value;
        setPassword(value);
    };

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
                                        <button className="btn btn-primary">Daftar!</button>
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