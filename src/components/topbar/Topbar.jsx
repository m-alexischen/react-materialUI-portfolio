import React from 'react';
import { Person, Mail } from '@material-ui/icons';
import './topbar.scss';

const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>ALEX.</a>
                    <div className='itemContainer'>
                        <Person className='icon' />
                        <span>123 123 1234</span>
                    </div>
                    <div className='itemContainer'>
                        <Mail className='icon' />
                        <span>email@email.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Topbar;