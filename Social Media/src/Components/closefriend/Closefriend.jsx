import "./closefriend.css";

export default function Closefriend({ user, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(user.username);
    }
  };

  return (
    <li className="sidebarFriend" onClick={handleClick}>
      <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
      <span className="sidebarfriendName">{user.username}</span>
    </li>
  );
}
