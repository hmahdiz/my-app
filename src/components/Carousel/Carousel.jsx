import React, { useState } from "react";
import styles from "./Carousel.module.css";
import { ChevronLeftSolid, ChevronRightSolid } from "../../Icons";
import Slider from "./Slider";
import WrapIcon from "../WrapIcon";
import cn from "classnames";

const Carousel = ({ imagePerSlide = 4, products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSilde = (index) => {
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === Math.floor(products.length / imagePerSlide);

    if (isFirst && index === -1) {
      setCurrentIndex(Math.floor(products.length / imagePerSlide));
    } else if (isLast && index === 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevState) => prevState + index);
    }
  };

  return (
    <div className={styles.container}>
      <WrapIcon
        className={cn(styles.carouselArrow, styles.carouselArrowLeft)}
        iconComponent={<ChevronLeftSolid />}
        onIconClick={() => handleSilde(-1)}
      />
      <ul
        className={styles.slider}
        style={{ transform: `translate(-${currentIndex * 100}%)` }}
      >
        {products.map((product) => (
          <React.Fragment key={product.id}>
            <Slider product={product} imagePerSlide={imagePerSlide} />
          </React.Fragment>
        ))}
      </ul>
      <WrapIcon
        className={cn(styles.carouselArrow, styles.carouselArrowRight)}
        iconComponent={<ChevronRightSolid />}
        onIconClick={() => handleSilde(1)}
      />
    </div>
  );
};

export default Carousel;
