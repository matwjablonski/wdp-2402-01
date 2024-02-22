import React from 'react';
import styles from './Feedback.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Feedback = () => {
  const opinions = useSelector(state => state.opinions);

  const opinionsCount = 3;
  const activeOpinion = 0;

  const dots = [];
  for (let i = 0; i < opinionsCount; i++) {
    dots.push(
      <li key={i}>
        <a className={i === activeOpinion && styles.active}>{i}</a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
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
        {opinions.map(opinion => (
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
    </div>
  );
};

export default Feedback;
