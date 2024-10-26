import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';

const Card = ({ url, title, type, description, pictures }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(cardRef.current);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    // Effect for the image slideshow
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [pictures.length]);

    const handleClick = (e) => {
        e.preventDefault();
        window.open(url, '_blank');
    };

    return (
        <a
            href={url}
            onClick={handleClick}
            style={{ textDecoration: 'none' }}
            className={styles.cardWrapper}
        >
            <div
                className={`${styles.cardContent} ${isVisible ? styles.fadeIn : ''}`}
                ref={cardRef}
            >
                <div className={styles.textContainer}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardType}>Type : {type}</p>
                    <p className={styles.cardDescription}>{description}</p>
                </div>
                <img
                    src={pictures[currentImageIndex]} // Display the current image
                    alt={`${title} image ${currentImageIndex + 1}`}
                    className={styles.cardPictures}
                />
            </div>
        </a>
    );
};

Card.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired, // Expect an array of images
};

export default Card;
