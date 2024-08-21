import React from "react";
import "./OnlineList.css";

const OnlineList = ({ OnlineUserList }) => {
  const { username, profilePicture } = OnlineUserList;
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img src={profilePicture} alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>

      <span className="rightbarUsername">{username}</span>
    </li>
  );
};

export default OnlineList;
