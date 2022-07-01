import PropTypes from 'prop-types';
import Statistics from "./Statistics";
import css from './Statistics.module.css'


const StatisticsList = ({title, stats}) => {
    return <section className={css.statistics}>
        {title&&<h2 className={css.title}>{title}</h2>}
  <ul className={css.statList}>
            {stats.map(item =>
                <li className={css.statItem} style={{backgroundColor:getRandomHexColor()}} key={item.id}>
                <Statistics
                id={item.id}
                label={item.label}
                percentage={item.percentage}
            />
            </li>)}
  </ul>
</section>
}
Statistics.propTypes = {
    id:  PropTypes.string
}
export default StatisticsList;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}