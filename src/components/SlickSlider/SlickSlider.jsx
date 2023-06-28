import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "@/Icons";
import styles from "./SlickSlider.module.css";
import cn from "classnames";

const SlickSlider = ({ products, heading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = (index) => {
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === products.length / 3 - 1;

    if (isFirst && index === -1) {
      setCurrentIndex(products.length / 3 - 1);
    } else if (isLast && index === 1) {
      setCurrentIndex(0);
    } else setCurrentIndex((prevIndex) => prevIndex + index);
  };

  return (
    <div className={styles.container}>
      <h3>{heading}</h3>
      <div className={styles.content}>
        <button
          className={cn(styles.arrow, styles.arrowLeft)}
          onClick={() => navigate(-1)}
        >
          <ArrowLeft />
        </button>
        <div className={styles.sliderContainer}>
          <ul
            className={styles.slider}
            style={{
              transform: `translate3d(${-100 * currentIndex}%, 0, 0)`,
            }}
          >
            {products.map((product) => (
              <li key={product.id}>
                <img src={product.url} />
              </li>
            ))}
          </ul>
        </div>
        <button
          className={cn(styles.arrow, styles.arrowRight)}
          onClick={() => navigate(1)}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
export default SlickSlider;
