import MotionDiv from "@/components/motion-div";
import styles from "./about.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

function AboutSection() {
  return (
    <>
      <div className={styles.about}>
        <div className="container">
          <MotionDiv className={styles.left}>
            <h3>Deloitte Software Engineering</h3>
            <h4>Innovate and accelerate with Modern Software Development</h4>
            <p>
              The imperative for integrated, expansive, and seamless digital
              experiences is fueling software product design and development
              across organizations at an unprecedented scale. These demands
              require capabilities to imagine, build, and run digital products
              and services for new and existing stakeholders across traditional
              and emerging channels.
            </p>
            <p>
              Deloitte's Software Engineering Services can design, build, and
              scale your most critical solutions, from front-end applications to
              embedded software and back-end infrastructure. We founded our
              practice on the belief that modern, engaging, and value-driven
              engineering requires untethered curiosity, deep technical prowess,
              an intimate understanding of the business, and a culture of
              execution.
            </p>
          </MotionDiv>
          <MotionDiv motion="left" className={styles.right}>
            <img
              src="http://hashedin.com/wp-content/uploads/2023/08/Group-302.png"
              alt="about-img"
              width="100%"
            />
          </MotionDiv>
        </div>
      </div>
      <div className={styles.about_1}>
        <div className="container">
          <MotionDiv className={styles.box}>
            <h3>The Engineering Advantage</h3>
            <p>
              Discover the innovation and technology to transform what's next
              into what's now.
            </p>
            <div>
              <Link href={"/"} className="btn-primary">
                <span>Watch Video</span>
                <FontAwesomeIcon icon={faVideo} />
              </Link>
            </div>
          </MotionDiv>
          <MotionDiv className={styles.box_1}>
            <h3>Don't just bet on the future. Build it.</h3>
            <p>
              What does the future look like? It's an innately human question
              that drives our progress. In our pursuit to discover new worlds,
              unlock new dimensions, and push the boundaries of the possible,
              the only limit is our readiness to explore new frontiers and the
              technology that takes us there.
            </p>
          </MotionDiv>
        </div>
      </div>
      <div className={styles.image}>
        <MotionDiv className="container">
          <h3>
            Why <span>Deloitte?</span>
          </h3>
          <img
            src="http://hashedin.com/wp-content/uploads/2023/11/engg_map.png"
            alt="img"
            width="100%"
          />
        </MotionDiv>
      </div>
      <div className={styles.boxes}>
        <div className="container">
          <MotionDiv index={0} className={styles.box_2}>
            <img
              src="https://hashedin.com/wp-content/uploads/2022/11/del-se-adv-1.png"
              alt="img"
            />
            <span>Global Scale And Reach</span>
          </MotionDiv>
          <MotionDiv index={1} className={styles.box_2}>
            <img
              src="https://hashedin.com/wp-content/uploads/2022/11/del-se-adv-2.png"
              alt="img"
            />
            <span>Deep Industry Domain Expertise</span>
          </MotionDiv>
          <MotionDiv index={2} className={styles.box_2}>
            <img
              src="https://hashedin.com/wp-content/uploads/2022/11/del-se-adv-3.png"
              alt="img"
            />
            <span>Product Mindset' Led Approach</span>
          </MotionDiv>
          <MotionDiv index={3} className={styles.box_2}>
            <img
              src="https://hashedin.com/wp-content/uploads/2022/11/del-se-adv-4.png"
              alt="img"
            />
            <span>Agile And DevOps-Centric Methodology</span>
          </MotionDiv>
          <MotionDiv index={4} className={styles.box_2}>
            <img
              src="https://hashedin.com/wp-content/uploads/2022/11/del-se-adv-5.png"
              alt="img"
            />
            <span>Pod Delivery Model</span>
          </MotionDiv>
        </div>
      </div>
      <div className={styles.card}>
        <div className="container">
          <MotionDiv className={styles.card_box}>
            <div className={styles.card_left}>
              <h3>
                Deloitte's Focus On Cutting-Edge Tech And Software Engineering
              </h3>
            </div>
            <div className={styles.card_right}>
              <p>
                Major investments in emerging technologies such as AI and Cloud
                analytics.
              </p>
              <p>
                Multiple acquisitions focused on enhancing cloud-native,
                software engineering capabilities and adjacent capabilities in
                AI/Analytics, Cyber, etc.
              </p>
              <p>
                Analysts recognize Deloitte's industry-specific cloud experience
                and our global leadership in cloud strategy, services, and
                innovation.
              </p>
            </div>
          </MotionDiv>
        </div>
      </div>
      <div className={styles.analyst}>
        <div className="container">
          <MotionDiv className={styles.analyst_content}>
            <h3>Analyst Recognition</h3>
            <div>
              <div className={styles.analyst_card}>
                <img
                  src="https://hashedin.com/wp-content/uploads/2022/11/del-focus-1.png"
                  alt="img"
                />
                <p>
                  Named a 2023 Gartner® Magic Quadrant™ Leader for Custom
                  Software Development Services, Worldwide1
                </p>
                <Link href={"/"}>
                  <span>Read More</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
              <div className={styles.analyst_card}>
                <img
                  src="https://hashedin.com/wp-content/uploads/2022/11/del-focus-1.png"
                  alt="img"
                />
                <p>
                  Named a 2023 Gartner® Magic Quadrant™ Leader in Public Cloud
                  IT Transformation Services2
                </p>
                <Link href={"/"}>
                  <span>Read More</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
              <div className={styles.analyst_card}>
                <img
                  src="https://hashedin.com/wp-content/uploads/2022/11/del-focus-2.png"
                  alt="img"
                />
                <p>
                  Recognized as a Leader in the IDC MarketScape: Worldwide
                  Software Engineering Services 2023 Vendor Assessment
                </p>
                <Link href={"/"}>
                  <span>Read More</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>

      <div className="container">
        <div className={styles.about_2}>
          <MotionDiv>
            <h3>Streamline Delivery. Break Down Bottlenecks!</h3>
          </MotionDiv>
          <MotionDiv>
            <p>
              The unprecedented pace and breadth of innovation are creating
              opportunities across the software engineering solutions life
              cycle, including how software is developed, deployed,
              commercialized, and scaled. Our approach and delivery models
              ensure you have the flexibility to experiment, rigor to deliver,
              and architecture to scale.
            </p>
          </MotionDiv>
          <hr />
          <MotionDiv>
            <h4>Why we are different</h4>
          </MotionDiv>
          <MotionDiv className={styles.about_2_cards}>
            <div>
              <p>
                Core engineering capabilities with deep industry/sector and
                business domain expertise
              </p>
            </div>
            <div>
              <p>
                Capacity to develop software products that drive innovation at
                the edge merging HashedIn's services and Deloitte's scaled
                digital, cloud, AI and cyber capabilities
              </p>
            </div>
            <div>
              <p>
                A scalable, pod-based delivery model for software engineering,
                enabling cross-functional orchestration of work
              </p>
            </div>
            <div>
              <p>
                A platform for growth through HashedIn market-leading solutions
                (leveraging cloud native technologies, AI capabilities, and a
                modern pod-based delivery model)
              </p>
            </div>
          </MotionDiv>
        </div>
      </div>
      <MotionDiv className={styles.bottom_rating}>
        <div className="container">
          <div className={styles.rating}>
            <div className={styles.images}>
              <div className={styles.b_img_1}>
                <img
                  src="https://hashedin.com/wp-content/uploads/2023/12/CertificationBadge-Aug-2023-2024.png"
                  alt="image 1"
                  width="100%"
                />
              </div>
              <div className={styles.b_img_2}>
                <img
                  src="https://hashedin.com/wp-content/uploads/2023/12/2.-Indias-Best-Workplaces-in-IT-IT-BPM-1.png"
                  alt="image 2"
                  width="100%"
                />
                <img
                  src="https://hashedin.com/wp-content/uploads/2022/11/top25.png"
                  alt="img 1"
                  width="100%"
                />
              </div>
            </div>
            <div>
              <p>We are Great Place to Work certified five years in a row!</p>
            </div>
          </div>
          <div className={styles.glassdoor}>
            <img
              src="http://hashedin.com/wp-content/uploads/2023/12/glassdoor-rating.png"
              alt="glassdoor-rating"
            />
          </div>
        </div>
      </MotionDiv>
      <MotionDiv className={styles.bottom_about}>
        <div className="container">
          <MotionDiv motion="right" className={styles.about_left}>
            <img
              src="https://hashedin.com/wp-content/uploads/2022/11/impact-1.png"
              alt="image"
              width="100%"
            />
          </MotionDiv>
          <MotionDiv index={1} className={styles.about_right}>
            <h3>What Impact Will You Make?</h3>
            <p>
              Are you a problem solver looking for more than a job? HashedIn by
              Deloitte is where you'll find unrivalled opportunities in software
              engineering to unleash your true potential. From learning to
              leadership, this is your chance to take your career to the next
              level!
            </p>
            <p>
              With the agility of a start-up and the opportunities of an
              enterprise, at HashedIn, every day your work will make an impact
              that matters!
            </p>
            <div>
              <Link href={"/"} className="btn-primary">
                <span>See current job openings</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          </MotionDiv>
        </div>
      </MotionDiv>
    </>
  );
}

export default AboutSection;
