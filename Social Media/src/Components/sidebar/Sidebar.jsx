import "./sidebar.css";
import { MdRssFeed } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { BiSolidVideos } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { IoBagSharp } from "react-icons/io5";
import { MdEvent } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { Users } from "../../Dummy";
import Closefriend from "../closefriend/Closefriend";
import { useState } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Feed");

  const handleSidebarClick = (itemName) => {
    console.log(`Sidebar: Clicked on ${itemName}`);
    setActiveItem(itemName);
    // Add navigation logic here
  };

  const handleFriendClick = (username) => {
    console.log(`Sidebar: Clicked on friend ${username}`);
    // Add friend chat/navigation logic here
  };

  return (
    <div className="sidebar">
      <div className="sidebarWapper">
        <ul className="sidebarlist">
          <li
            className={`sidebarlistItem ${
              activeItem === "Feed" ? "active" : ""
            }`}
            onClick={() => handleSidebarClick("Feed")}
          >
            <MdRssFeed className="sidebarIcon" />
            <span className="sidebarlistItemText">Feed</span>
          </li>
          <li
            className={`sidebarlistItem ${
              activeItem === "Chat" ? "active" : ""
            }`}
            onClick={() => handleSidebarClick("Chat")}
          >
            <IoChatboxEllipses className="sidebarIcon" />
            <span className="sidebarlistItemText">Chat</span>
          </li>
          <li
            className={`sidebarlistItem ${
              activeItem === "Videos" ? "active" : ""
            }`}
            onClick={() => handleSidebarClick("Videos")}
          >
            <BiSolidVideos className="sidebarIcon" />
            <span className="sidebarlistItemText">Videos</span>
          </li>
          <li
            className={`sidebarlistItem ${
              activeItem === "Groups" ? "active" : ""
            }`}
            onClick={() => handleSidebarClick("Groups")}
          >
            <MdGroups className="sidebarIcon" />
            <span className="sidebarlistItemText">Groups</span>
          </li>
          <li
            className={`sidebarlistItem ${
              activeItem === "Bookmarks" ? "active" : ""
            }`}
            onClick={() => handleSidebarClick("Bookmarks")}
          >
            <FaBookmark className="sidebarIcon" />
            <span className="sidebarlistItemText">Bookmarks</span>
          </li>
          <li
            className={`sidebarlistItem ${
              activeItem === "Questions" ? "active" : ""
            }`}
            onClick={() => handleSidebarClick("Questions")}
          >
            <FaQuestionCircle className="sidebarIcon" />
            <span className="sidebarlistItemText">Questions</span>
          </li>
          <li
            className={`sidebarlistItem ${
              activeItem === "Jobs" ? "active" : ""
            }`}
            onClick={() => handleSidebarClick("Jobs")}
          >
            <IoBagSharp className="sidebarIcon" />
            <span className="sidebarlistItemText">Jobs</span>
          </li>
          <li
            className={`sidebarlistItem ${
              activeItem === "Events" ? "active" : ""
            }`}
            onClick={() => handleSidebarClick("Events")}
          >
            <MdEvent className="sidebarIcon" />
            <span className="sidebarlistItemText">Events</span>
          </li>
          <li
            className={`sidebarlistItem ${
              activeItem === "Courses" ? "active" : ""
            }`}
            onClick={() => handleSidebarClick("Courses")}
          >
            <FaGraduationCap className="sidebarIcon" />
            <span className="sidebarlistItemText">Courses</span>
          </li>
        </ul>
        <button
          className="sidebarButton"
          onClick={() => handleSidebarClick("Show More")}
        >
          Show More
        </button>
        <hr className="sidebarhr" />
        <ul className="sidebarfriendlist">
          {Users.map((u) => (
            <Closefriend
              key={u.id}
              user={u}
              onClick={() => handleFriendClick(u.username)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
