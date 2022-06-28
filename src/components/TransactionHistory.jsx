import PropTypes from 'prop-types';

// const TransactionItem =({type,amount,currency})  => {
//         return <Fragment>
//             <td>{type}</td>
//             <td>{amount}</td>
//             <td>{currency}</td>
//     </Fragment>
//     }
    
  
const TransactionHistory = ({ items }) => {
    return  <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody>
            {items.map(item =>
                <tr key={item.id}>
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