import "./topbar.css";
import { IoSearch } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
const Topbar = () => {
  return (
    <div className="topbarcontainer">
      <div className="topbarLeft">
        <span className="logo">Connectify</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <IoSearch className="searchIcon" />
          <input
            placeholder="Search for friend, posts or Videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Time</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <IoMdPerson />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <IoChatboxEllipsesOutline />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <IoIosNotifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="pic1.jpg.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
