// import PropTypes from 'prop-types';
import { Component } from 'react';

import Statistics from '../statistics/Statistics';
import s from './Feedback.module.css';

class Feedback extends Component {
  // state = {
  //   goodCount: 0,
  //   neutralCount: 0,
  //   badCount: 0,
  // };

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Please leave your feedback</h1>
        <div className={s.btn}>
          <button
            onClick={() => {
              console.log('click on goodBtn');
            }}
            type="button"
            className={s.goodBtn}
          >
            Good
          </button>
          <button
            onClick={() => {
              console.log('click on neutralBtn');
            }}
            type="button"
            className={s.neutralBtn}
          >
            Neutral
          </button>
          <button
            onClick={() => {
              console.log('click on badBtn');
            }}
            type="button"
            className={s.badBtn}
          >
            Bad
          </button>
        </div>
      </div>
    );
  }
}
export default Feedback;

// Feedback.propTypes = {
//   title: PropTypes.string,
// };
