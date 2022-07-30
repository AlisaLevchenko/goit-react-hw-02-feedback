import { Component } from 'react';

import Controls from '../controls/Controls';
import Statistics from '../statistics/Statistics';
import NotificationMessage from '../notificationMessage/NotificationMessage';
import s from './Feedback.module.css';

class Feedback extends Component {
  state = {
    countGoodFB: 0,
    countNeutralFB: 0,
    countBadFB: 0,
  };

  handleGoodFB = () => {
    this.setState(prevValue => {
      return { countGoodFB: prevValue.countGoodFB + 1 };
    });
  };
  handleNeutralFB = () => {
    this.setState(prevValue => {
      return { countNeutralFB: prevValue.countNeutralFB + 1 };
    });
  };
  handleBadFB = () => {
    this.setState(prevValue => {
      return { countBadFB: prevValue.countBadFB + 1 };
    });
  };

  handleTotalFB = () => {
    const totalFB =
      this.state.countGoodFB +
      this.state.countNeutralFB +
      this.state.countBadFB;
    return totalFB;
  };
  handlePositiveFBPers = () => {
    if (this.handleTotalFB() === 0) {
      return 0;
    } else {
      const positiveFBPercentage =
        (100 / this.handleTotalFB()) * this.state.countGoodFB;
      return positiveFBPercentage;
    }
  };

  render() {
    this.handleTotalFB();
    this.handlePositiveFBPers();

    return (
      <section className={s.container}>
        <h1 className={s.title}>Please leave your feedback</h1>
        <div className={s.btn}>
          <Controls
            onGood={this.handleGoodFB}
            onNeutral={this.handleNeutralFB}
            onBad={this.handleBadFB}
          />
        </div>

        {this.handleTotalFB() ? (
          <Statistics
            goodFB={this.state.countGoodFB}
            neutralFB={this.state.countNeutralFB}
            badFB={this.state.countBadFB}
            totalFB={this.handleTotalFB()}
            positivPersrntFB={this.handlePositiveFBPers()}
          />
        ) : (
          <NotificationMessage title="There is no feedback yet :(" />
        )}
      </section>
    );
  }
}
export default Feedback;
