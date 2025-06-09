import "./post.css";
import { IoMdMore } from "react-icons/io";
import { Users } from "../../Dummy";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLike] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLike(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopleft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postProfilrImg"
            />
            {Users.filter((u) => u.id === post.userId)[0].username}
            <span className="postUsername"></span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <IoMdMore />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> {post?.desc} </span>
          <img className="postImg" src={post.Photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postbuttonLeft">
            <img
              src="like.png"
              onClick={likeHandler}
              alt=""
              className="heartimg"
            />
            <img
              src="facebook-love-png-3.png"
              onClick={likeHandler}
              alt=""
              className="likeimg"
            />
            <span className="likeCounter">{like} people liked it</span>
          </div>
          <div className="postbuttonRight">
            <div className="postcommentText">{post.comment} Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}
