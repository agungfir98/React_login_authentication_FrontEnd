import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Lupapassword = () =>{
    const[email, setEmail] = useState('');
    const[success, setSuccess] =useState('')
    const[error, setError] = useState('');
    const[alert, setAlert] = useState('');
    
    const ChangeEmail = (e)=> {
        const value = e.target.value;
        setEmail(value);
        setError('');
    };

    const kirimMail = function (){
        if (!email){
            setAlert('Email wajib diisi!')
            setTimeout( ()=>{
                setAlert('')
            },3000)
        }else {
            axios.put('http://localhost:3001/lupapassword',{email: email})
            .then( res => {
                setEmail('');
                setSuccess('Email pemulihan password terkirim. Silahkan cek email anda.')
                setTimeout( ()=>{
                    setSuccess('')
                },5000)
            })
            .catch( err => {
                setError(err.response.data.message);
                setTimeout( ()=> {
                    setError('')
                },3000)
            })
        }
    }

    return(
        <div style={{marginTop: "200px"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card p-4">
                                <div className="card-body">
                                    <div>
                                        <h2>Halaman Lupa password</h2>
                                    </div>
                                    {
                                        success && (
                                            <div className="alert alert-primary">
                                                <p>{success}</p>
                                            </div>
                                        )
                                    }
                                    {
                                        error && (
                                            <div className="alert alert-danger">
                                                <p>{error}</p>
                                            </div>
                                        )
                                    }
                                    {
                                        alert && (
                                            <div className="alert alert-warning">
                                                <p>{alert}</p>
                                            </div>
                                        )
                                    }
                                    <div className="form-group">
                                        <label>Masukan E-mail pemulihan</label>
                                        <input type="email" placeholder="Nama/E-mail" className="form-control" value={email} onChange={ChangeEmail} />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 text-left">
                                            <Link to="/" className="btn btn-warning">
                                                Batal
                                            </Link>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <button className="btn btn-primary" onClick={kirimMail}>Kirim</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default Lupapassword;