import cn from "classnames";
import styles from "./SkillConnection.module.css";

type SkillConnectionProps = {
  isActive?: boolean;
};

export const SkillConnection = ({ isActive = false }: SkillConnectionProps) => (
  <div className={styles.connection}>
    <div
      className={cn(styles.inner, {
        [styles.active]: isActive,
      })}
    ></div>
  </div>
);
