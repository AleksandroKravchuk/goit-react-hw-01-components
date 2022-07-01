import PropTypes from 'prop-types';
import { Fragment } from 'react';
import css from './Statistics.module.css'
const Statistics = ({ label, percentage }) => {

    return <Fragment>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
  </Fragment>
   
    
}
Statistics.propTypes = {
    label: PropTypes.string,
    percentage:PropTypes.number
}
export default Statistics;