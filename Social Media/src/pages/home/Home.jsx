import Topbar from "../../Components/topbar/Topbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";
import Footer from "../../Components/footer/Footer";

import "./home.css";
const Home = () => {
  return (
    <div className="homeWrapper">
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
