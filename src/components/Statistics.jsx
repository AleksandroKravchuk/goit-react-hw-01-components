import PropTypes from 'prop-types';
import { Fragment } from 'react';
const Statistics = ({ label, percentage }) => {
 
    return <Fragment>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}%</span>
  </Fragment>
   
    
}
Statistics.propTypes = {
    label: PropTypes.string,
    percentage:PropTypes.number
}
export default Statistics;