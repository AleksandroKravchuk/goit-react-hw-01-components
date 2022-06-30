import PropTypes from 'prop-types';
import { Fragment } from 'react';
const FriendListItem = ({ avatar, name, isOnline }) => {
 
    return <Fragment>
        {isOnline? <span class="green"></span>:<span class="red"></span>}
         <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
  </Fragment>
   
    
}
FriendListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool
}
export default FriendListItem;