import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem"

const FriendsList = ({friends}) => {
    return  <ul class="friend-list">
            {friends.map(item =>
                <li class="item" key={item.id}>
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