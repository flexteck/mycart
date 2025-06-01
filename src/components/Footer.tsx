import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      {/* Top: Logo and Social Icons */}
      <div className={styles.topBar}>
        <h2 className={styles.logo}>Bandage</h2>
        <div className={styles.socials}>
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaTwitter />
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Middle: Columns */}
      <div className={styles.columns}>
        {[
          {
            title: 'Company Info',
            links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
          },
          {
            title: 'Legal',
            links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
          },
          {
            title: 'Features',
            links: ['Business Marketing', 'User Analytic', 'Live Chat', 'Unlimited Support'],
          },
          {
            title: 'Resources',
            links: ['IOS & Android', 'Watch a Demo', 'Customers', 'API'],
          },
        ].map((col, i) => (
          <div className={styles.column} key={i}>
            <h4>{col.title}</h4>
            {col.links.map((link, idx) => (
              <a href="#" key={idx}>{link}</a>
            ))}
          </div>
        ))}

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h4>Get In Touch</h4>
          <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
          <p className={styles.note}>Lore imp sum dolor Amit</p>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>Made With Love By Finland All Right Reserved</p>
      </div>
    </footer>
  );
}
