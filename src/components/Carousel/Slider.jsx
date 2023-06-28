import styles from "./Carousel.module.css";
import cn from "classnames";

const Slider = ({ product, className, imagePerSlide, aspectRatio }) => {
  const getImageStyle = () => {
    const imageWidthPercentage = `${(1 / imagePerSlide) * 100}%`;

    return {
      maxWidth: imageWidthPercentage,
      flex: `0 0 ${imageWidthPercentage}`,
    };
  };

  return (
    <li className={cn(styles.slider, className)} style={getImageStyle()}>
      <img
        src={product.url}
        style={aspectRatio && { aspectRatio: aspectRatio }}
      />
    </li>
  );
};

export default Slider;
