import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

function Header() {
    return (
        <nav className={styles.navbar}>
            <p className={styles.title}>Mike LOCKS</p>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link to="/">Home</Link></li>
                <li className={styles.navItem}><Link to="/services">Services</Link></li>
                <li className={styles.navItem}><Link to="/portfolio">Portfolio</Link></li>
                <li className={styles.navItem}><Link to="/bio">Bio</Link></li>
                <li className={styles.navItem}><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Header;
