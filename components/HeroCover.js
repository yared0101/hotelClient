import { PlayCircleOutlined, DownloadOutlined } from "@ant-design/icons";
import styles from "../styles/heroCover.module.css";

export const HeroCover = ({}) => {
  return (
    <div className={styles.heroCover}>
      <div className={styles.textPart}>
        <h1 className={styles.header}>
          Here is Triangle&apos;s restaurant menu
        </h1>
        <button className={styles.button}>
          <PlayCircleOutlined className={styles.buttonIcon} />
          <span className={styles.buttonText}>Our menu</span>
        </button>
      </div>
    </div>
  );
};

export default HeroCover;
