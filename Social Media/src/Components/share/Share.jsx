import "./share.css";
import { MdPermMedia } from "react-icons/md";
import { PiTagSimpleFill } from "react-icons/pi";
import { IoLocation } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";

const Share = () => {
  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="shareTop">
          <img src="pic1.jpg.jpg" alt="" className="shareProfileImg" />
          <input placeholder="What's in your mind" className="shareInput" />
        </div>
        <hr className="sharehr" />
        <div className="shareBotton">
          <div className="shareOptions">
            <div className="shareOption">
              <MdPermMedia className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <PiTagSimpleFill className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <IoLocation className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <MdEmojiEmotions className="shareIcon" />
              <span className="shareOptionText">Felling</span>
            </div>
          </div>
          <button className="sharebutton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
