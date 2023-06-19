import React, { useState } from "react";
import styles from "./SwipingImage.module.css";
import WrapIcon from "../WrapIcon";
import { ChevronLeftSolid, ChevronRightSolid } from "../../Icons";
import cn from "classnames";

const SwipingImage = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSilde = (index) => {
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === products.length - 1;

    if (isFirst && index === -1) {
      setCurrentIndex(products.length - 1);
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
      <ul className={styles.slider}>
        {products.map((product) => (
          <li
            key={product.id}
            className={styles.image}
            style={{ transform: `translate(-${100 * currentIndex}%)` }}
          >
            <img src={product.url} />
          </li>
        ))}
      </ul>
      <WrapIcon
        className={cn(styles.carouselArrow, styles.carouselArrowLeft)}
        iconComponent={<ChevronRightSolid />}
        onIconClick={() => handleSilde(1)}
      />
    </div>
  );
};

export default SwipingImage;
