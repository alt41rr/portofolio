import React from 'react'
import Navbar from '../Navbar';

const index = () => {
    return (
        <header id="header">
            <div className="container">
                <h1><a href="index.html">Emily Jones</a></h1>
                {/* <a href="index.html" className="mr-auto"><img src="assets/img/logo.png" alt className="img-fluid" /></a> */}
                <h2>I'm a passionate <span>graphic designer</span> from New York</h2>
                <Navbar />
                <div className="social-links">
                <a href="/#" className="twitter"><i className="bi bi-twitter" /></a>
                <a href="/#" className="facebook"><i className="bi bi-facebook" /></a>
                <a href="/#" className="instagram"><i className="bi bi-instagram" /></a>
                <a href="/#" className="linkedin"><i className="bi bi-linkedin" /></a>
                </div>
            </div>
        </header>
    )
}

export default index