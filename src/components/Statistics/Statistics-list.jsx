import PropTypes from 'prop-types';
import Statistics from "./Statistics";
import css from './Statistics.module.css'
import getRandomHexColor from '../helpers/color.js'

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
