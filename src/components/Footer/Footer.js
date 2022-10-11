import logo from '../../logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark py-4 mt-auto text-center text-white'>
            <img
                alt=""
                src={logo}
                width="25"
                height="25"
                className="d-inline-block align-top"
            />{' '}
            <Link className='fs-6 fw-bolder text-white text-decoration-none' to="/">Quiz Hero</Link>
            <p className='mt-3'>© 2022 Quiz Hero, All rights reserved.</p>
        </div>
    );
};

export default Footer;