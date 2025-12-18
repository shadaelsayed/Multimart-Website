import { NavLink } from 'react-router-dom'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
    <footer class="multistore-footer bg-body-tertiary">
  <div class="footer-container">
 
    <div class="footer-columns">
     
      <div class="footer-column">
        <NavLink className="navbar-brand fw-bold fs-3" to="/">
            <span style={{ color: '#ae1c9ab6' }}>Multi</span>mart
        </NavLink>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/press">Press Room</a></li>
          <li><a href="/investors">Investor Relations</a></li>
          <li><a href="/sustainability">Sustainability</a></li>
        </ul>
      </div>

     
      <div class="footer-column">
        <h3>Customer Service</h3>
        <ul>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/shipping">Shipping Info</a></li>
          <li><a href="/returns">Returns & Exchanges</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/size-guide">Size Guide</a></li>
        </ul>
      </div>

     
      <div class="footer-column">
        <h3>Store Locations</h3>
        <ul>
          <li><a href="/stores/us">US Stores</a></li>
          <li><a href="/stores/uk">UK Stores</a></li>
          <li><a href="/stores/eu">EU Stores</a></li>
          <li><a href="/stores/ca">Canada Stores</a></li>
          <li><a href="/stores/au">Australia Stores</a></li>
        </ul>
      </div>

     
      <div class="footer-column newsletter">
        <h3>Stay Connected</h3>
        <p>Sign up for exclusive offers and updates</p>
        <form class="newsletter-form">
          <input type="email" placeholder="Your email address" required/>
          <button type="submit">Subscribe</button>
        </form>
        <div class="social-links">
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Twitter"><FaXTwitter /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
          <a href="#" aria-label="Pinterest"><FaPinterest /></a>
        </div>
      </div>
    </div>

   
    <div class="footer-bottom">
      <div class="copyright">
        <p>&copy; 2023 Global Retail Group. All Rights Reserved.</p>
      </div>
      <div class="legal-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/accessibility">Accessibility</a>
        <a href="/cookies">Cookie Settings</a>
      </div>
      <div class="payment-methods">
        <i class="fab fa-cc-visa" aria-label="Visa"></i>
        <i class="fab fa-cc-mastercard" aria-label="Mastercard"></i>
        <i class="fab fa-cc-amex" aria-label="American Express"></i>
        <i class="fab fa-cc-paypal" aria-label="PayPal"></i>
        <i class="fab fa-cc-apple-pay" aria-label="Apple Pay"></i>
      </div>
    </div>
  </div>
    </footer>
    </>
  )
}
