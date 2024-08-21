import React, { useState } from "react";
import "./Post.css";
import { Users } from "../../dummyData";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Post = ({ userpost }) => {
  const [like, setLike] = useState(userpost.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const user = Users.filter((u) => u.id === 1);
  console.log(user);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === userpost.id)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === userpost.id)[0].username}
            </span>
            <span className="postDate">{userpost.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {userpost?.desc}
            <img className="postImg" src={userpost.photo} alt="" />
          </span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              alt=""
              onClick={likeHandler}
            />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{userpost.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
