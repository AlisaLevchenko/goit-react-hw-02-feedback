// import { Component } from 'react';
import s from './Statistics.module.css';

export function Statistics() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Statistics</h1>
      <ul className={s.statisticList}>
        <li className={s.statisticItem}>
          <p>Good: 0</p>
        </li>
        <li className={s.statisticItem}>
          <p>Neutral: 0</p>
        </li>
        <li className={s.statisticItem}>
          <p>Bad: 0</p>
        </li>
        <li className={s.statisticItem}>
          <p>Total: 0</p>
        </li>
        <li className={s.statisticItem}>
          <p>Positive feedback: 0%</p>
        </li>
      </ul>
    </div>
  );
}
