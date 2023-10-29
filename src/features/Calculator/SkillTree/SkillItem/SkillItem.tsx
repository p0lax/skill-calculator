import cn from "classnames";
import styles from "./SkillItem.module.css";
import { Skill } from "types/calculator.types";

type SkillItemProps = {
  skill: Skill;
  isSelected: boolean;
  onClick: () => void;
  onContextMenu: (e: React.MouseEvent) => void;
};
export const SkillItem = ({
  skill,
  onClick,
  onContextMenu,
  isSelected: selected,
}: SkillItemProps) => {
  const skillClassName = cn(styles.skill, { [styles.selected]: selected });
  const iconClassName = cn(styles.icon, styles[skill.id], {
    [styles.active]: selected,
  });
  return (
    <div
      className={skillClassName}
      onClick={onClick}
      onContextMenu={onContextMenu}
      data-testid="skill-item"
    >
      <div className={iconClassName} title={skill.name}></div>
    </div>
  );
};
