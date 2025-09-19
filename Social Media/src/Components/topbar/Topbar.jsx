import "./topbar.css";
import { IoSearch } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import { Users } from "../../Dummy";
const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("main");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  const handleLinkClick = (linkName) => {
    console.log(`Clicked on ${linkName}`);
    // Add navigation logic here
    setIsMenuOpen(false); // Close menu after clicking
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  // Cleanup effect to remove body class on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, []);

  return (
    <>
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
            <span
              className="topbarLink"
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </span>
            <span
              className="topbarLink"
              onClick={() => handleLinkClick("Timeline")}
            >
              Timeline
            </span>
          </div>
          <div className="topbarIcons">
            <div
              className="topbarIconItem"
              onClick={() => handleLinkClick("Profile")}
            >
              <IoMdPerson />
              <span className="topbarIconBadge">1</span>
            </div>
            <div
              className="topbarIconItem"
              onClick={() => handleLinkClick("Messages")}
            >
              <IoChatboxEllipsesOutline />
              <span className="topbarIconBadge">2</span>
            </div>
            <div
              className="topbarIconItem"
              onClick={() => handleLinkClick("Notifications")}
            >
              <IoIosNotifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img
            src="/assets/person/pic1.jpg.jpg"
            alt="Profile"
            className="topbarImg"
            onClick={() => handleLinkClick("Profile")}
            title="Profile Picture"
          />

          {/* Hamburger Menu Button - Only visible on mobile */}
          <div className="hamburgerMenu" onClick={toggleMenu}>
            {isMenuOpen ? <MdClose /> : <HiMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobileMenuOverlay" onClick={toggleMenu}>
          <div className="mobileMenu" onClick={(e) => e.stopPropagation()}>
            <div className="mobileMenuHeader">
              <span className="logo">Connectify</span>
              <MdClose className="closeIcon" onClick={toggleMenu} />
            </div>
            {/* Mobile Menu Navigation */}
            <div className="mobileMenuNav">
              <div
                className={`mobileMenuNavItem ${
                  activeSection === "main" ? "active" : ""
                }`}
                onClick={() => handleSectionClick("main")}
              >
                Menu
              </div>
              <div
                className={`mobileMenuNavItem ${
                  activeSection === "chat" ? "active" : ""
                }`}
                onClick={() => handleSectionClick("chat")}
              >
                Chat
              </div>
              <div
                className={`mobileMenuNavItem ${
                  activeSection === "profile" ? "active" : ""
                }`}
                onClick={() => handleSectionClick("profile")}
              >
                Profile
              </div>
            </div>

            <div className="mobileMenuContent">
              {activeSection === "main" && (
                <>
                  <div
                    className="mobileMenuItem"
                    onClick={() => handleLinkClick("Feed")}
                  >
                    <span>Feed</span>
                  </div>
                  <div
                    className="mobileMenuItem"
                    onClick={() => handleLinkClick("Videos")}
                  >
                    <span>Videos</span>
                  </div>
                  <div
                    className="mobileMenuItem"
                    onClick={() => handleLinkClick("Groups")}
                  >
                    <span>Groups</span>
                  </div>
                  <div
                    className="mobileMenuItem"
                    onClick={() => handleLinkClick("Bookmarks")}
                  >
                    <span>Bookmarks</span>
                  </div>
                  <div
                    className="mobileMenuItem"
                    onClick={() => handleLinkClick("Questions")}
                  >
                    <span>Questions</span>
                  </div>
                  <div
                    className="mobileMenuItem"
                    onClick={() => handleLinkClick("Jobs")}
                  >
                    <span>Jobs</span>
                  </div>
                  <div
                    className="mobileMenuItem"
                    onClick={() => handleLinkClick("Events")}
                  >
                    <span>Events</span>
                  </div>
                  <div
                    className="mobileMenuItem"
                    onClick={() => handleLinkClick("Courses")}
                  >
                    <span>Courses</span>
                  </div>
                  <button
                    className="mobileShowMoreBtn"
                    onClick={() => handleLinkClick("Show More")}
                  >
                    Show More
                  </button>
                </>
              )}

              {activeSection === "chat" && (
                <>
                  <div className="mobileChatHeader">
                    <h4>Online Friends</h4>
                  </div>
                  <div className="mobileChatList">
                    {Users.map((user) => (
                      <div
                        key={user.id}
                        className="mobileChatItem"
                        onClick={() =>
                          handleLinkClick(`Chat with ${user.username}`)
                        }
                      >
                        <div className="mobileChatUser">
                          <img
                            src={user.profilePicture}
                            alt={user.username}
                            className="mobileChatAvatar"
                          />
                          <div className="mobileChatInfo">
                            <span className="mobileChatName">
                              {user.username}
                            </span>
                            <span className="mobileChatStatus">Online</span>
                          </div>
                        </div>
                        <div className="mobileChatOnline"></div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeSection === "profile" && (
                <>
                  <div className="mobileProfileHeader">
                    <img
                      src="/assets/person/pic1.jpg.jpg"
                      alt="Profile"
                      className="mobileProfileAvatar"
                    />
                    <h3>My Profile</h3>
                  </div>
                  <div className="mobileProfileMenu">
                    <div
                      className="mobileMenuItem"
                      onClick={() => handleLinkClick("View Profile")}
                    >
                      <span>View Profile</span>
                    </div>
                    <div
                      className="mobileMenuItem"
                      onClick={() => handleLinkClick("Edit Profile")}
                    >
                      <span>Edit Profile</span>
                    </div>
                    <div
                      className="mobileMenuItem"
                      onClick={() => handleLinkClick("Settings")}
                    >
                      <span>Settings</span>
                    </div>
                    <div
                      className="mobileMenuItem"
                      onClick={() => handleLinkClick("Privacy")}
                    >
                      <span>Privacy</span>
                    </div>
                    <div
                      className="mobileMenuItem"
                      onClick={() => handleLinkClick("Help & Support")}
                    >
                      <span>Help & Support</span>
                    </div>
                    <div
                      className="mobileMenuItem"
                      onClick={() => handleLinkClick("Logout")}
                    >
                      <span>Logout</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;
