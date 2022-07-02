import PropTypes from 'prop-types';
import css from './Profile.module.css'

function Profile({avatar, username, tag, location='no location', stats}) {
  return <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.item}>
      <span className={css.label}>Followers</span><br></br>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Views</span><br></br>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Likes</span><br></br>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location:PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
  followers: PropTypes.number,
  views:PropTypes.number,
  likes: PropTypes.number,})
}
export default Profile;