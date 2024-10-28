import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className={styles.headerBackground}>
            <nav className={styles.navbar}>
                <p className={styles.title}>Mike LOCKS</p>
                {/* Button to toggle the menu on small screens */}
                <button 
                    className={styles.menuToggle} 
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                >
                    Menu
                </button>
                {/* Navigation list with animation */}
                <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ''}`}>
                    <li className={styles.navItem}>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => (isActive ? styles.active : undefined)}
                            onClick={closeMenu} // Close the menu after selection
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink 
                            to="/services" 
                            className={({ isActive }) => (isActive ? styles.active : undefined)}
                            onClick={closeMenu}
                        >
                            Services
                        </NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink 
                            to="/portfolio" 
                            className={({ isActive }) => (isActive ? styles.active : undefined)}
                            onClick={closeMenu}
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink 
                            to="/bio" 
                            className={({ isActive }) => (isActive ? styles.active : undefined)}
                            onClick={closeMenu}
                        >
                            Bio
                        </NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => (isActive ? styles.active : undefined)}
                            onClick={closeMenu}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
