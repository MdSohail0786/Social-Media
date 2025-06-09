import "./online.css";

export default function Online({ user }) {
  return (
    <li className="rightbarFriends">
      <div className="rightbarProfileimgContainer">
        <img src={user.profilePicture} alt="" className="rightbarProfileimg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
