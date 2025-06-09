import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { posts } from "../../Dummy";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
