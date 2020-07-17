import React from 'react';
import { Redirect} from 'react-router-dom';

const Dashboard = function () {
    const token = localStorage.getItem('token');
    console.log('Token didapat',token);
    if (!token) {
        return(
            <Redirect to='/' />
        )

    }
    return(
        <div className="container">
            <div>
                <p>Halaman Dashboarad</p>
            </div>
        </div>
    )
}

export default Dashboard;