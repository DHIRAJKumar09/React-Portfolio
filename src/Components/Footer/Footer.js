import './footer.css'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
const Footer = () => {
    return (
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            {/* Add your logo or any other branding element */}
          </div>
          <div className="footer-links">
            <a href="#intro">Home</a>
            <a href="#qualification">Qualification</a>
            <a href="#achievements">Achievements</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contacts">Contacts</a>
          </div>
          <div className="footer-social">
            {/* Add your social media links/icons */}
            <a href="https://github.com/DHIRAJKumar09" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/dhirajkumar09/" target="_blank" rel="noopener noreferrer">
             <FaLinkedin />
            </a>
            <a href="https://leetcode.com/dhirajsinghania/" target="_blank" rel="noopener noreferrer">
            <FaCode />
            </a>
            {/* Add more social media links/icons as needed */}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024  All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;