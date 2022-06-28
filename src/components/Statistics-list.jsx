import PropTypes from 'prop-types';
import Statistics from "./Statistics";

const StatisticsList = ({title, stats}) => {
    return <section class="statistics">
        {title&&<h2 class="title">{title}</h2>}
  <ul class="stat-list">
            {stats.map(item =>
                <li class="item" key={item.id}>
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