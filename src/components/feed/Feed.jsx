import React from "react";
import "./Feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { UserpostsData } from "../../dummyData";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {UserpostsData.map((userpost) => {
          return <Post key={userpost.id} userpost={userpost} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
