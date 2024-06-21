import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ToggleButton from "./toggle-button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ServicesTab from "./services-tab";

const links = [
  {
    name: "Industry Cloud",
    href: "/#",
  },
  {
    name: "About Us",
    href: "/#",
  },
  {
    name: "Careers",
    href: "/#",
  },
  {
    name: "Insights",
    href: "/#",
  },
];

function Navbar() {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="HashedIn" width={100} height={50} />
          </Link>
          <div className={`${styles.menu} ${active && styles.show}`}>
            <ul className={styles.menu_items}>
              <ServicesTab />
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={pathname === link.href ? styles.active : ""}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <Link href={"mailto:contact@hashedin.com"}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <ToggleButton active={active} onClick={() => setActive(!active)} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
