import PropTypes from 'prop-types';
import css from './Transaction.module.css';
// const TransactionItem =({type,amount,currency})  => {
//         return <Fragment>
//             <td>{type}</td>
//             <td>{amount}</td>
//             <td>{currency}</td>
//     </Fragment>
//     }
    
  
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
            {items.map(item =>
                <tr className={css.line} key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
            {/* <TransactionItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}
                /> */}
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