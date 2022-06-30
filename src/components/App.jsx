import Profile from "./Profile/Profile";
import StatisticsList from "./Statistics/Statistics-list";
import FriendList from "./Friends/FriendList";
import TransactionHistory from "./Transactions/TransactionHistory"
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
  
export const App = () => {
  return (
    <div
      style={{
    
        textAlign: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    
        < Profile     
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
      />
  <StatisticsList title="Upload stats" stats={data} />
  <FriendList friends={friends} />
  <TransactionHistory items={transactions} /> 

    </div>
  );
};
