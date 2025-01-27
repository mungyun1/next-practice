import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link href="/">홈</Link>
      <Link href="/login">로그인</Link>
    </div>
  );
};

export default Nav;
