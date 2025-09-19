import "./footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerTop">
          <div className="footerSection">
            <h3>Connectify</h3>
            <p>Connect with friends and the world around you on Connectify.</p>
            <div className="socialIcons">
              <a href="#" className="socialIcon" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="socialIcon" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="socialIcon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="socialIcon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="socialIcon" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#" className="socialIcon" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="footerSection">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
            </ul>
          </div>

          <div className="footerSection">
            <h4>Community</h4>
            <ul>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </div>

          <div className="footerSection">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">Data Policy</a>
              </li>
              <li>
                <a href="#">Community Guidelines</a>
              </li>
            </ul>
          </div>

          <div className="footerSection">
            <h4>Contact</h4>
            <div className="contactInfo">
              <div className="contactItem">
                <MdEmail className="contactIcon" />
                <span>support@connectify.com</span>
              </div>
              <div className="contactItem">
                <MdPhone className="contactIcon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contactItem">
                <MdLocationOn className="contactIcon" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <div className="footerBottomLeft">
            <p>&copy; 2024 Connectify. All rights reserved.</p>
          </div>
          <div className="footerBottomRight">
            <select className="languageSelect">
              <option value="en">English (US)</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="zh">中文</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
