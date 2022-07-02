import PropTypes from 'prop-types';
import css from './Transaction.module.css';

const TransactionHistory = ({ items }) => {
    return  <table className={css.table}>
  <thead >
    <tr className={css.head}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody>
            {items.map(({id,type,amount,currency}) =>
            <tr className={css.line} key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
            </tr> )} 
  </tbody>
</table>
}
TransactionHistory.propTypes = {
    id: PropTypes.string,
    type:PropTypes.string,
    amount:PropTypes.string,
    currency:PropTypes.string
}
export default TransactionHistory;