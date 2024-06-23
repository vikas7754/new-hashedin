import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import GotoTopButton from "../basic-ui/goto-top-button";

const items = [
  {
    title: "1",
    links: [
      {
        label: "Services",
        url: "/services",
      },
      {
        label: "Ecosystems & Alliances",
        url: "http://www2.deloitte.com/us/en/pages/about-deloitte/solutions/deloitte-alliances.html",
      },
    ],
  },
  {
    title: "2",
    links: [
      {
        label: "About Us",
        url: "/about-us",
      },
      {
        label: "Careers",
        url: "/careers",
      },
      {
        label: "Open Positions",
        url: "/careers/#explore-opportunities",
      },
    ],
  },
  {
    title: "3",
    links: [
      {
        label: "Insights",
        url: "/insights",
      },
      {
        label: "Contact Us",
        url: "/contact-us",
      },
      {
        label: "Our People",
        url: "/about-us/#our-people",
      },
    ],
  },
  {
    title: "4",
    links: [
      {
        label: "Cookies",
        url: "https://cookienotice.deloitte.com/",
      },
      {
        label: "Cookie Settings",
        url: "",
      },
      {
        label: "Privacy",
        url: "https://www2.deloitte.com/us/en/footerlinks1/privacy.html",
      },
    ],
  },
];

const social = [
  {
    label: "LinkedIn",
    url: "/",
    icon: faLinkedin,
  },
  {
    label: "Facebook",
    url: "/",
    icon: faFacebook,
  },
  {
    label: "Twitter",
    url: "/",
    icon: faTwitter,
  },
  {
    label: "Youtube",
    url: "/",
    icon: faYoutube,
  },
  {
    label: "Instagram",
    url: "/",
    icon: faInstagram,
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="HashedIn"
              width={100}
              height={50}
              style={{ height: "auto" }}
            />
          </Link>
        </div>
        <div className={styles.content}>
          <div className={styles.goto_top}>
            <GotoTopButton />
          </div>
          <div className={styles.address}>
            <h4>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Office Address</span>
            </h4>
            <p>
              Ecoworld (ECW) Block 4D, Floors 1, 2, 3 & 4, Bellandur, Sarjapur
              Outer Ring Road, Bangalore Urban, Bangalore - 560103,
              Karnataka,India
            </p>
          </div>
          <div className={styles.links}>
            {items.map((item, i) => (
              <div key={i} className={styles.link_items}>
                {item.links.map((link, j) => (
                  <Link key={j} href={link.url}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© HashedIn by Deloitte 2024</p>
          <div className={styles.social}>
            {social.map((item, i) => (
              <Link key={i} href={item.url}>
                <FontAwesomeIcon icon={item.icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
