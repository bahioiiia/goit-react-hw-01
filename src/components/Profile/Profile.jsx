import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={clsx(css.container)}>
      <div className={clsx(css.userContent)}>
        <div className={clsx(css.imgWrapper)}>
          <img
            src={image}
            alt={name}
            width="280"
            className={clsx(css.userImg)}
          />
        </div>
        <div className={clsx(css.userInfo)}>
          <p className={clsx(css.userName)}>
            <b>{name}</b>
          </p>
          <p className={clsx(css.userTag)}>@{tag}</p>
          <p className={clsx(css.userLocation)}>{location}</p>
        </div>
      </div>

      <ul className={clsx(css.userStats)}>
        <li className={clsx(css.userItem)}>
          <span className={clsx(css.userStatsTitle)}>Followers</span>
          <span className={clsx(css.userStatsInfo)}>
            <b>{followers}</b>
          </span>
        </li>
        <li className={clsx(css.userItem)}>
          <span className={clsx(css.userStatsTitle)}>Views</span>
          <span className={clsx(css.userStatsInfo)}>
            <b>{views}</b>
          </span>
        </li>
        <li className={clsx(css.userItem)}>
          <span className={clsx(css.userStatsTitle)}>Likes</span>
          <span className={clsx(css.userStatsInfo)}>
            <b>{likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
