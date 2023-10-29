
export type SkillType = 'stack' | 'food' | 'cake' | 'crown' | 'ship' | 'diving' | 'lightning' | 'skull';
export type SkillTreeType = 'path1' | 'path2';
export type SkillMapKey = `${SkillTreeType}-${SkillType}`;

export type Skill = {
  id: SkillType;
  name: string;
  cost: number;
};

export type SkillTreeNode = {
  skill: Skill;
  next?: SkillType;
  prev?: SkillType;
};
