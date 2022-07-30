import s from './Controls.module.css';

function Controls(props) {
  const { onGood, onNeutral, onBad } = props;
  return (
    <div>
      <button className={s.goodBtn} onClick={onGood}>
        Good
      </button>
      <button className={s.neutralBtn} onClick={onNeutral}>
        Neutral
      </button>
      <button className={s.badBtn} onClick={onBad}>
        Bad
      </button>
    </div>
  );
}
export default Controls;
