import React from "react";
import "./CloseFriends.css";

const CloseFriends = ({ users }) => {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={users.profilePicture} alt="" />
      <span className="sidebarFriendName">{users.username}</span>
    </li>
  );
};

export default CloseFriends;
