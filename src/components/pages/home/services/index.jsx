import Link from "next/link";
import styles from "./services.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import MotionDiv from "@/components/motion-div";

const services = [
  {
    title: "Software Engineering Operating Models and Talent",
    description:
      "Strategic advisory and partnership to design and deliver our clients’ SWE teams",
    image: "https://hashedin.com/wp-content/uploads/2022/11/service-1.png",
  },
  {
    title: "Digital Product and App Development",
    description:
      "Design, build, and deliver mobile and web-based products to market at speed and scale",
    image: "https://hashedin.com/wp-content/uploads/2022/11/service-2.png",
  },
  {
    title: "Software Platforms Engineering",
    description:
      "Build seamless customer and partner experiences with intuitive digital interfaces and workflows",
    image: "https://hashedin.com/wp-content/uploads/2022/11/service-3.png",
  },
  {
    title: "Data Engineering and AI/ML",
    description:
      "Create systems to collect, store, and process data at scale to harness insights and automation",
    image: "https://hashedin.com/wp-content/uploads/2022/11/service-4.png",
  },
  {
    title: "Embedded Software Engineering",
    description:
      "Drive innovation with connected products that integrate hardware and software",
    image: "https://hashedin.com/wp-content/uploads/2022/11/service-5.png",
  },
];

function Services() {
  return (
    <div className="container">
      <div className={styles.header}>
        <MotionDiv index={0}>
          <h3>Our Software Engineering Offerings</h3>
        </MotionDiv>
        <MotionDiv index={1}>
          <p>
            We combine a product-centered approach, modern engineering
            principles, and deep industry experience to help maximize your
            potential.
          </p>
        </MotionDiv>
        <MotionDiv index={2} className={styles.btn}>
          <Link href="/services" className="btn-primary">
            <span>Move your business forward</span>
            <FontAwesomeIcon icon={faAnglesRight} />
          </Link>
        </MotionDiv>
      </div>
      <div className={styles.services}>
        {services.map((service, index) => (
          <ServiceCard key={index} data={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;

const ServiceCard = ({ data }) => {
  return (
    <MotionDiv className={styles.service}>
      <div>
        <img src={data.image} alt={data.title} />
      </div>
      <h4>{data.title}</h4>
      <p>{data.description}</p>
    </MotionDiv>
  );
};
