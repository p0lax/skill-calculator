import { makeAutoObservable } from 'mobx';
import {
  Skill,
  SkillMapKey,
  SkillTreeNode,
  SkillTreeType,
  SkillType,
} from 'types/calculator.types';
import { MAX_AVAILABLE_POINTS, TREE1, TREE2 } from './calculator.const';

export class CalculatorStore {
  private takenSkills = new Set<SkillMapKey>();
  
  skillPoints = MAX_AVAILABLE_POINTS;

  skillTreeMap: Record<SkillTreeType, SkillTreeNode[]> = {
    path1: TREE1,
    path2: TREE2,
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private getSkillKey(skillTreeId: SkillTreeType, skillId: SkillType): SkillMapKey {
    return `${skillTreeId}-${skillId}`;
  }

  get takenPoints() {
    return this.takenSkills.size;
  }
  /**
   * Used for the quick access to skills to avoid full linked list implementation
   * Calculated once on app start to avoid data duplication
   */
  get skillsMap() {
    const allSkills = Object.values(this.skillTreeMap).flat();
    return allSkills.reduce((acc, { skill }) => {
      acc[skill.id] = skill;
      return acc;
    }, {} as Record<SkillType, Skill>);
  }

  isSkillSelected(skillTreeId: SkillTreeType, skillId: SkillType) {
    return this.takenSkills.has(this.getSkillKey(skillTreeId, skillId));
  }

  assingPoint(skillTreeId: SkillTreeType, skillId: SkillType, prevId?: SkillType) {
    if (this.takenPoints >= this.skillPoints) {
      alert('Not enough points');
      return;
    }

    const skillKey = this.getSkillKey(skillTreeId, skillId);
    const isAlreadyTaken = this.takenSkills.has(skillKey);
    const isPrevSkillNotSelected = prevId && !this.isSkillSelected(skillTreeId, prevId);
    if (isAlreadyTaken || isPrevSkillNotSelected) {
      return;
    }

    this.takenSkills.add(skillKey);
  }

  removePoint(skillTreeId: SkillTreeType, skillId: SkillType, nextId?: SkillType) {
    const skillKey = this.getSkillKey(skillTreeId, skillId);
    if (nextId && this.isSkillSelected(skillTreeId, nextId)) {
      return;
    }
    if (this.takenSkills.has(skillKey)) {
      this.takenSkills.delete(skillKey);
    }
  }
}
