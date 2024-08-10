import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./FriendList.module.css";

import FriendListItem from "../FriendListItem/FriendListItem";

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default function FriendList({ friends }) {
  return (
    <ul className={clsx(css.friendsWraper)}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={clsx(css.friendsItem)}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}