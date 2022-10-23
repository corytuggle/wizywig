import React from 'react';
import logo from './assets/logo.png';
import CompDrawer from './CompDrawer';
import LeftDrawer from './NavDrawer';


export default function Header() {
    return (
        <div id="header">
            <header className="header">
                <img src={logo} className="logo" alt="logo" />
                <a href="/" className="Home">
                    <p>WIZyWIG</p>
                </a>
                <LeftDrawer />
                <CompDrawer />
            </header>
        </div>
    )
}
