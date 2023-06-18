import React from "react";
import cn from "classnames";
import styles from "./WrapIcon.module.css";

const WrapIcon = ({ className, iconComponent, onIconClick }) => (
  <button
    className={cn(styles.wrapIconContainer, className)}
    onClick={onIconClick}
  >
    {iconComponent}
  </button>
);

export default WrapIcon;
