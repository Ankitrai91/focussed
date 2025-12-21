import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container flex-between">
        <span className="contact-text">
          📞 <a href="tel:+919217056624">9217056624</a>
          <span className="divider"> | </span>
          ✉️ <a href="mailto:sales@focussed.co.in">sales@focussed.co.in</a>
        </span>

        <div className="socials">
          <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
          <a href="https://instagram.com/focussed_solutions" target="_blank"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/focussed-solutions-18a87a399/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  );
}
