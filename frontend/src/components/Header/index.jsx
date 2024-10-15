import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';

function Header() {
    return (
        <nav className={styles.navbar}>
            <p className={styles.title}>Mike LOCKS</p>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => (isActive ? styles.active : undefined)}
                    >
                        Home
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink 
                        to="/services" 
                        className={({ isActive }) => (isActive ? styles.active : undefined)}
                    >
                        Services
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink 
                        to="/portfolio" 
                        className={({ isActive }) => (isActive ? styles.active : undefined)}
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink 
                        to="/bio" 
                        className={({ isActive }) => (isActive ? styles.active : undefined)}
                    >
                        Bio
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => (isActive ? styles.active : undefined)}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
