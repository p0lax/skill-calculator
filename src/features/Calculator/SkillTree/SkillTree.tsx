import React from "react";
import { observer } from "mobx-react-lite";
import styles from "./SkillTree.module.css";
import { SkillItem } from "./SkillItem/SkillItem";
import { SkillConnection } from "./SkillConnection/SkillConnection";
import { SkillTreeNode, SkillTreeType } from "types/calculator.types";
import { useDataStore } from "stores/store.context.hook";

type SkillTreeProps = {
  treeId: SkillTreeType;
  tree: SkillTreeNode[];
};

export const SkillTree = observer(({ tree, treeId }: SkillTreeProps) => {
  const {
    calculator: { assingPoint, isSkillSelected, removePoint },
  } = useDataStore();

  return (
    <div className={styles.skillTree} data-testid="skill-tree">
      <div className={styles.title}>Talent Path 1</div>
      <div className={styles.tree}>
        {tree.map(({ skill, next, prev }) => {
          const isSelected = isSkillSelected(treeId, skill.id);
          return (
            <React.Fragment key={skill.id}>
              <SkillItem
                skill={skill}
                isSelected={isSelected}
                onClick={() => assingPoint(treeId, skill.id, prev)}
                onContextMenu={(e: React.MouseEvent) => {
                  e.preventDefault();
                  removePoint(treeId, skill.id, next);
                }}
              />
              {next && <SkillConnection isActive={isSelected} />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
});
