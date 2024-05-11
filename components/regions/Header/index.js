import Heading from "../../html/Heading";
import Logo from "../../custom/Logo";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo fill="white" />
      <br />
      <Heading level={1}>Top 10 Artists</Heading>
    </header>
  );
};
export default Header;
