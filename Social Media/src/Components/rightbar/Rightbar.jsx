import "./rightbar.css";
import { Users } from "../../Dummy";
import Online from "../online/Online";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="gift.png" alt="" className="Birthdaypng" />
          <span className="birthdaytext">
            <b>Tabrej Alam</b> and <b>3 other Friends</b> have a birthday today
          </span>
        </div>
        <img src="Ad.webp" alt="" className="rightbarAd" />
        <h4 className="rightbarTitles">Online Friends</h4>
        <ul className="rightbarfriendlist">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Rightbar;
