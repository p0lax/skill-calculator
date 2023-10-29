import { observer } from "mobx-react-lite";
import styles from "./PointsCounter.module.css";
import { useDataStore } from "stores/store.context.hook";

export const PointsCounter = observer(() => {
  const {
    calculator: { takenPoints, skillPoints },
  } = useDataStore();
  return (
    <div className={styles.pointsCounter}>
      <div className={styles.counter} data-testid="points-counter">
        {takenPoints} / {skillPoints}
      </div>
      <div className={styles.title}>Points Spent</div>
    </div>
  );
});
