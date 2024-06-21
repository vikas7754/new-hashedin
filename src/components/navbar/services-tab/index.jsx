import { useRef, useState } from "react";
import styles from "./services.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import Link from "next/link";
import MotionDiv from "@/components/motion-div";

const services = [
  {
    title: "Software Engineering Operating Models & Talent",
    link: "/",
    items: [
      "Operating Model & Agile Transformation",
      "Talent Acquisition & Retention",
      "Delivery Model & \n\t\t\t\t\t\tLocation Strategy",
      "Business Case & Roadmap",
      "CoE Build, Operate & Transition",
    ],
  },
  {
    title: "Digital Product & App Development",
    link: "/",
    items: [
      "Product Strategy & Management",
      "Customer / Employee / Partner Experiences",
      "Solution Architecture & Prototyping",
      "Custom App Development",
      "Software Modernization",
    ],
  },
  {
    title: "Software Platforms Engineering",
    link: "/",
    items: [
      "Integrated Product, \n\t\t\t\t\t\tAPI & Data Platforms",
      "Product Quality Engineering",
      "DevOps Enablement",
      "Content Platform Modernization",
      "Media & Supply Chain Engineering",
    ],
  },
  {
    title: "Data Engineering \n\t\t\t\t\t& AI/ML",
    link: "/",
    items: [
      "Data Products & Commercialization",
      "Modern Data Architectures",
      "Data Engineering & \n\t\t\t\t\t\tManagement",
      "Data Security & Privacy",
      "ML Ops Engineering",
    ],
  },
  {
    title: "Embedded Software Engineering",
    link: "/",
    items: [
      "Embedded Software Architectures",
      "Embedded Software Development",
      "Embedded Software Validation",
      "Telemetry, Analytics, & Monetization",
      "Product Operations",
    ],
  },
];

function ServicesTab() {
  const [active, setActive] = useState(false);
  const btnRef = useRef(null);
  const dropdownRef = useRef(null);

  useOnClickOutside([btnRef, dropdownRef], () => setActive(false));

  return (
    <li className={styles.tab}>
      <button
        ref={btnRef}
        onClick={() => setActive(!active)}
        className={active ? styles.active : ""}
      >
        <span>Services</span>
        <FontAwesomeIcon icon={active ? faChevronUp : faChevronDown} />
      </button>
      {active && (
        <div ref={dropdownRef} className={`${styles.dropdown}`}>
          <div className="container">
            <button className={styles.close} onClick={() => setActive(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className={styles.services}>
              {services.map((service, index) => (
                <Service key={index} data={service} index={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

export default ServicesTab;

const Service = ({ data, index }) => {
  return (
    <MotionDiv className={styles.service} index={index}>
      <Link href={data.link}></Link>
      <h4>{data.title}</h4>
      {data.items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </MotionDiv>
  );
};
