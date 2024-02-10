import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

export default function Navbar({
  logoContent = "My Navbar",
  homeContent = "Home",
  aboutContent = "About",
  contactContent = "Contact",
}) {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <div className={styles.logo}>{logoContent}</div>
      </Link>
      <div className={styles.navLinks}>
        <Link href="/">
          <span className={styles.link}>{homeContent}</span>
        </Link>
        <Link href="/about">
          <span className={styles.link}>{aboutContent}</span>
        </Link>
        <Link href="/contact">
          <span className={styles.link}>{contactContent}</span>
        </Link>
      </div>
    </nav>
  );
}
