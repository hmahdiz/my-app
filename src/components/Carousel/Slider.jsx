import styles from "./Carousel.module.css";
import cn from "classnames";

const Slider = ({ product, className, imagePerSlide }) => {
  const getImageStyle = () => {
    const imageWidthPercentage = `${(1 / imagePerSlide) * 100}%`;

    return {
      maxWidth: imageWidthPercentage,
      flex: `0 0 ${imageWidthPercentage}`,
    };
  };

  return (
    <li className={cn(styles.slider, className)} style={getImageStyle()}>
      <img src={product.url} />
    </li>
  );
};

export default Slider;
