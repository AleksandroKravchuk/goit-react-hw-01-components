import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";
import css from './Friends.module.css'

const FriendsList = ({friends}) => {
    return  <ul className={css.friendsList}>
            {friends.map(item =>
                <li className={css.item} key={item.id}>
                <FriendListItem
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
            />
            </li>)}
  </ul>
}
FriendsList.propTypes = {
    id: PropTypes.number,
}
export default FriendsList;