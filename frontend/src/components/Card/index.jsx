import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './card.module.scss';

const Card = ({ url, title, type, description, cover }) => {
    const handleClick = (e) => {
      e.preventDefault();
      window.open(url, '_blank');
    };
  
    return (
      <a href={url} onClick={handleClick} style={{ textDecoration: 'none' }} className={styles.cardWrapper}>
        <div className={styles.textContainer}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardType}>Type : {type}</p>
          <p className={styles.cardDescription}>{description}</p>
        </div>
        <img src={cover} alt={title} className={styles.cardCover} />
      </a>
    );
  };

Card.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
