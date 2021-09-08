import Image from "next/image";
import styles from "../styles/topVictualMenu.module.css";

export const TopVictualMenu = ({}) => {
  return (
    <div className={styles.main}>
      <h1 className={styles.header}>Top Menu</h1>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.imagePart}>
            <Image
              src="/victuals/poke.png"
              alt="alt"
              width="600"
              height="600"
            ></Image>
          </div>
          <div className={styles.textPart}>
            <h1>The Name</h1>
            <div>
              Delectus, corporis laudantium provident ab amet saepe alias earum
            </div>
            <div className={styles.price}>
              <h1>450</h1>
              <div>birr</div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imagePart}>
            <Image
              src="/victuals/poke.png"
              alt="alt"
              width="600"
              height="600"
            ></Image>
          </div>
          <div className={styles.textPart}>
            <h1>The Name</h1>
            <div>
              Delectus, corporis laudantium provident ab amet saepe alias earum
            </div>
            <div>
              <h1>450</h1>
              <span>birr</span>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imagePart}>
            <Image
              src="/victuals/poke.png"
              alt="alt"
              width="600"
              height="600"
            ></Image>
          </div>
          <div className={styles.textPart}>
            <h1>The Name</h1>
            <div>
              Delectus, corporis laudantium provident ab amet saepe alias earum
            </div>
            <div>
              <h1>450</h1>
              <span>birr</span>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imagePart}>
            <Image
              src="/victuals/poke.png"
              alt="alt"
              width="600"
              height="600"
            ></Image>
          </div>
          <div className={styles.textPart}>
            <h1>The Name</h1>
            <div>
              Delectus, corporis laudantium provident ab amet saepe alias earum
            </div>
            <div>
              <h1>450</h1>
              <span>birr</span>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imagePart}>
            <Image
              src="/victuals/poke.png"
              alt="alt"
              width="600"
              height="600"
            ></Image>
          </div>
          <div className={styles.textPart}>
            <h1>The Name</h1>
            <div>
              Delectus, corporis laudantium provident ab amet saepe alias earum
            </div>
            <div>
              <h1>450</h1>
              <span>birr</span>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imagePart}>
            <Image
              src="/victuals/poke.png"
              alt="alt"
              width="600"
              height="600"
            ></Image>
          </div>
          <div className={styles.textPart}>
            <h1>The Name</h1>
            <div>
              Delectus, corporis laudantium provident ab amet saepe alias earum
            </div>
            <div>
              <h1>450</h1>
              <span>birr</span>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imagePart}>
            <Image
              src="/victuals/poke.png"
              alt="alt"
              width="600"
              height="600"
            ></Image>
          </div>
          <div className={styles.textPart}>
            <h1>The Name</h1>
            <div>
              Delectus, corporis laudantium provident ab amet saepe alias earum
            </div>
            <div>
              <h1>450</h1>
              <span>birr</span>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imagePart}>
            <Image
              src="/victuals/poke.png"
              alt="alt"
              width="600"
              height="600"
            ></Image>
          </div>
          <div className={styles.textPart}>
            <h1>The Name</h1>
            <div>
              Delectus, corporis laudantium provident ab amet saepe alias earum
            </div>
            <div className={styles.price}>
              <h1>450</h1>
              <div>birr</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopVictualMenu;
