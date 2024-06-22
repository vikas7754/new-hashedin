import Link from "next/link";
import styles from "./services.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div className="container">
      <div className={styles.header}>
        <h3>Our Software Engineering Offerings</h3>
        <p>
          We combine a product-centered approach, modern engineering principles,
          and deep industry experience to help maximize your potential.
        </p>
        <div className={styles.btn}>
          <Link href="/services" className="btn-primary">
            <span>Move your business forward</span>
            <FontAwesomeIcon icon={faAnglesRight} />
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Services;

const ServiceCard = ({ data }) => {
  return <div></div>;
};
