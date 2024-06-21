import MotionDiv from "@/components/motion-div";
import styles from "./hero.module.scss";

function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={`${styles.main}`}>
        <div className={styles.video}>
          <video
            src="https://hashedin.com/wp-content/uploads/2023/08/Motif_480p.mp4"
            autoPlay
            muted
            loop
            width={"100%"}
          ></video>
        </div>
        <div className="container">
          <div className={styles.content}>
            <MotionDiv>
              <h1>Software Engineering with a Product Mindset </h1>
            </MotionDiv>
            <MotionDiv index={1}>
              <p>
                We are software engineers who solve business problems with a
                Product Mindset for leading global organizations.
              </p>
            </MotionDiv>
            <MotionDiv index={2}>
              <p>
                By combining engineering talent with business insight, we build
                software and products that can create new enterprise value.
              </p>
            </MotionDiv>
            <MotionDiv index={3}>
              <p>
                The secret to our success is a fast-paced learning environment,
                an extreme ownership spirit, and a fun culture.
              </p>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
