import { observer } from "mobx-react-lite";
import { PointsCounter } from "../PointsCounter/PointsCounter";
import { SkillTree } from "../SkillTree/SkillTree";
import styles from "./CalculatorBody.module.css";
import { useDataStore } from "stores/store.context.hook";
import { SkillTreeType } from "types/calculator.types";

export const CalculatorBody = observer(() => {
  const {
    calculator: { skillTreeMap },
  } = useDataStore();
  return (
    <div className={styles.body}>
      <div className={styles.trees}>
        {Object.keys(skillTreeMap).map((key) => (
          <SkillTree
            key={key}
            tree={skillTreeMap[key as SkillTreeType]}
            treeId={key as SkillTreeType}
          />
        ))}
      </div>
      <PointsCounter />
    </div>
  );
});
