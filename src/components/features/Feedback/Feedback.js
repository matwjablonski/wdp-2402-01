import React from 'react';
import styles from './Feedback.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';
import { useState } from 'react';

const Feedback = () => {
  const opinions = useSelector(state => state.opinions);

  const [activePage, setActivePage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const opinionsCount = Math.ceil(opinions.length);

  const handleSwipeLeft = () => {
    if (activePage < opinionsCount - 1) {
      setActivePage(activePage + 1);
    }
  };

  const handleSwipeRight = () => {
    if (activePage > 0) {
      setActivePage(activePage - 1);
    }
  };

  const handlePageChange = newPage => {
    setIsAnimating(true);
    setTimeout(() => {
      setActivePage(newPage);
      setIsAnimating(false);
    }, 300);
  };

  const dots = [];
  for (let i = 0; i < opinionsCount; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage && styles.active}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className={`${styles.root} ${isAnimating ? styles.fade : ''}`}>
      <Swipeable leftAction={handleSwipeLeft} rightAction={handleSwipeRight}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end flex-column flex-md-row'>
              <div className={'col-auto ' + styles.heading}>
                <h3>CLIENT FEEDBACK</h3>
              </div>
              <div className='col'></div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          {opinions.slice(activePage, activePage + 1).map(opinion => (
            <div key={opinion.id} className={styles.opinionBox}>
              <div className={styles.quote}>
                <FontAwesomeIcon icon={faQuoteRight} />
              </div>
              <p className={styles.opinionContent}>{opinion.content}</p>
              <div
                className={'row justify-content-center flex-row' + styles.signatureBox}
              >
                <div className={styles.imgBox}>
                  <img
                    src={opinion.image}
                    alt={opinion.name}
                    className={styles.imgOpinion}
                  />
                </div>
                <div className={styles.imgDescription}>
                  <span className={styles.bold}>{opinion.name}</span>
                  <br />
                  {opinion.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Swipeable>
    </div>
  );
};

export default Feedback;
