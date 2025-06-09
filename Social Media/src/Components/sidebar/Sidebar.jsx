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
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWapper">
        <ul className="sidebarlist">
          <li className="sidebarlistItem">
            <MdRssFeed className="sidebarIcon" />
            <span className="sidebarlistItemText">Feed</span>
          </li>
          <li className="sidebarlistItem">
            <IoChatboxEllipses className="sidebarIcon" />
            <span className="sidebarlistItemText">Chat</span>
          </li>
          <li className="sidebarlistItem">
            <BiSolidVideos className="sidebarIcon" />
            <span className="sidebarlistItemText">Videos</span>
          </li>
          <li className="sidebarlistItem">
            <MdGroups className="sidebarIcon" />
            <span className="sidebarlistItemText">Groups</span>
          </li>
          <li className="sidebarlistItem">
            <FaBookmark className="sidebarIcon" />
            <span className="sidebarlistItemText">Bookmarks</span>
          </li>
          <li className="sidebarlistItem">
            <FaQuestionCircle className="sidebarIcon" />
            <span className="sidebarlistItemText">Questions</span>
          </li>
          <li className="sidebarlistItem">
            <IoBagSharp className="sidebarIcon" />
            <span className="sidebarlistItemText">Jobs</span>
          </li>
          <li className="sidebarlistItem">
            <MdEvent className="sidebarIcon" />
            <span className="sidebarlistItemText">Events</span>
          </li>
          <li className="sidebarlistItem">
            <FaGraduationCap className="sidebarIcon" />
            <span className="sidebarlistItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarhr" />
        <ul className="sidebarfriendlist">
          {Users.map((u) => (
            <Closefriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
