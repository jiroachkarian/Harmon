import Link from "next/link";
import styles from "../styles/Navbar.module.css";

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
          <div>{homeContent}</div>
        </Link>
        <Link href="/about">
          <div>{aboutContent}</div>
        </Link>
        <Link href="/contact">
          <div>{contactContent}</div>
        </Link>
      </div>
    </nav>
  );
}
