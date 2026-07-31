import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-logo">Ocolus</div>
        <ul className="footer-links">
          <li><a href="#hero">Store Policy</a></li>
          <li><a href="#footer">Contact Us</a></li>
          <li><a href="#hero">FAQ</a></li>
          <li><a href="#hero">Privacy</a></li>
        </ul>
      </div>
      <p className="copyright">© 2026 Oculus Furniture Co. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;