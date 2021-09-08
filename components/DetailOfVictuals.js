import Image from "next/image";
import { Rate } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styles from "../styles/detailOfVictuals.module.css";

export const DetailOfVictuals = ({
  imageLocation,
  imageAlt = "VictualImage",
  title = "VictuaTitle",
  name = "VictuaName",
  description = "VictuaDescription",
  price = "VictuaPrice",
  currency = "Birr",
  foodNumber = "0",
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.textPart}>
          <h2>{title}</h2>
          <h1>{name}</h1>
          <div className={styles.secondaryImagePart}>
            <Image
              src={imageLocation}
              alt={imageAlt}
              width="600"
              height="640"
            />
          </div>
          <div className={styles.description}>
            <div>{description}</div>
          </div>
          <span className={styles.rate}>
            <Rate allowHalf defaultValue={2.5} />
          </span>
          <div className={styles.priceAndOrder}>
            <div className={styles.price}>
              <div className={styles.priceNumber}>{price} </div>
              {` `}
              <small className={styles.priceCurrency}>{currency}</small>
            </div>
            <button className={styles.orderButton}>Order Now</button>
          </div>
        </div>
        <div className={styles.imagePart}>
          <Image src={imageLocation} alt={imageAlt} width="600" height="640" />
        </div>
      </div>
      <div className={styles.preAndNexRoot}>
        <div className={styles.preAndNex}>
          <button>
            <LeftOutlined />
          </button>
          <span>{foodNumber}</span>
          <button>
            <RightOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailOfVictuals;
