import React, { useState } from 'react';
import Axios from 'axios';

const Resetpassword = (props) => {
    const[password, setPassword] = useState('');
    const[confirmpassword, setCPW] = useState('');
    const[ErrPW, setErrPW] = useState('');
    const[ErrCPW, setErrCPW] = useState('');
    const[Alert, setAlert] = useState('');

    const ChangePW = (e)=> {
        const value = e.target.value;
        setPassword(value)
        if(!value){
            setErrPW('Password tidak boleh kosong');
        } else {
            setErrPW('')
        }
    }
    const ChangeCPW = function (e){
        const value = e.target.value;
        setCPW(value)
        if(!value){
            setErrCPW('Confirm password diperlukan!')
        } else if (password !== value){
            setErrCPW('Password tidak cocok');
        }else {
            setErrCPW('')
        }
    }
    const SimpanPW = function () {
        const data = {
            password: password,
            token: props.match.params.token
        }
        // console.log(props.match.params.token);
        Axios.put('http://localhost:3001/resetpassword', data)
        .then( result =>{
            if(result){
                setPassword('');
                setCPW('');
                setAlert('Password berhasil diupdate')
                setTimeout( ()=>{
                    setAlert('')
                },5000)
            }
        })
    }


    return (
        <div style={{marginTop: "200px"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card p-4">
                                <div className="card-body">
                                    <div>
                                        <h2>Halaman Reset Password</h2>
                                    </div>
                                    {
                                        Alert && (
                                            <div className="alert alert-primary">
                                                <p>Password berhasil diubah</p>
                                            </div>
                                        )
                                    }
                                    <div className="form-group">
                                        <label>Password Baru</label>
                                        <input placeholder="Password" type="password" className="form-control" value={password} onChange={ChangePW} />
                                        {
                                            ErrPW && (
                                                <p className="text-danger small">{ErrPW}</p>
                                            )
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Konfirmasi Password Baru</label>
                                        <input placeholder="Password" type="password" className="form-control" value={confirmpassword} onChange={ChangeCPW} />
                                        {
                                            ErrCPW && (
                                                <p className="text-danger small">{ErrCPW}</p>
                                            )
                                        }
                                    </div>
                                    <div className="d-flex align-items-end flex-column mb-3">
                                        <div className="col-md-3">
                                        <button className="d-flex btn btn-primary" onClick={SimpanPW}>Simpan</button>
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
export default Resetpassword;