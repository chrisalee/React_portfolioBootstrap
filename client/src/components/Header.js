import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="main-info">
                <h1>Full Stack Developer</h1>
                <Typed
                    className = 'typed-text'
                    strings = {["ReactJS", "Python", "C#", "Angular"]}
                    typeSpeed = {40}
                    backSpeed = {80}
                    loop
                />
                <a href="./images/ChristopherLeeResume.pdf" className='btn-main-offer'>Contact</a>
            </div>
        </div>
    )
}

export default Header;
