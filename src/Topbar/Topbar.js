import classes from './Topbar.module.css';
import React from 'react';

const Topbar = () => {
    return (
        <header>
        <nav className={classes.Topbar}>
            <img src ="https://i.dlpng.com/static/png/197684_preview.png " alt="amazon Logo"/>
        </nav>
        </header>
    ) 
    
}

export default Topbar;