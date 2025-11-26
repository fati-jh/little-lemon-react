import footer from "./images/logoFooter.png"
function Footer() {
  return (
       <footer>

      <div class="footer-logo">
        <img src={footer} alt="Restaurant Logo"/>
        </div>
      <div class="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Find Us:</h3>
        <ul>
          <li><a href="#"> Swiss - Grünaustrasse, Zurich</a></li>
          <li><a href="#"> Phone: +(41) (044) 743-72-72 </a></li>
          <li><a href="#"> email:info@fzjhdev.ch </a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>

   <div class="footer-bottom">
       <p>&copy; 2025 Little Lemon. All rights reserved. Designed by Fz El-Jaouhari</p>
      </div>
</footer>
  );
};

export default Footer;