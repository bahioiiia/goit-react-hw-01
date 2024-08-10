import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./FriendListItem.module.css";

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img
        src={avatar}
        alt="Avatar"
        width="120"
        className={clsx(css.friendImg)}
      />
      <p className={clsx(css.friendName)}>{name}</p>
      <p
        className={clsx(
          css.friendStatus,
          isOnline ? css.isOnline : css.isOffline
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
