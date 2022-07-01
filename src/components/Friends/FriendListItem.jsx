import PropTypes from 'prop-types';
import { Fragment } from 'react';
import css from './Friends.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
 
    return <Fragment>
        {isOnline? <span className={css.green}></span>:<span className={css.red}></span>}
         <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
  </Fragment>
   
    
}
FriendListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool
}
export default FriendListItem;