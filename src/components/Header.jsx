import React from 'react';
import '../css/header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="container-fluid bg-warning p-2">
                <div className="container d-flex justify-content-between">
                    <Link to='/' style={{textDecoration:'none',color:'black'}}><p className='m-0'><span className='ak'>AK</span> <span className='notes ms-1'>Notes</span></p></Link>
                    <p><Link to="/api" style={{textDecoration:'none',color:'black',display:'inline-block'}} className='mt-4 news'>Latest News</Link></p>
                </div>
            </div>
        </>
    );
}


export default Header;