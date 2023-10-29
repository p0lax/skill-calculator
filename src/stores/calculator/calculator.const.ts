import { SkillTreeNode } from "types/calculator.types";

export const MAX_AVAILABLE_POINTS = 6;

export const TREE1: SkillTreeNode[] = [
  {
    skill: { id: 'stack', name: 'Stack Power', cost: 1 },
    next: 'food',
  },
  {
    skill: { id: 'food', name: 'Food Power', cost: 1 },
    next: 'cake',
    prev: 'stack',
  },
  {
    skill: { id: 'cake', name: 'Cake power', cost: 1 },
    next: 'crown',
    prev: 'food',
  },
  {
    skill: { id: 'crown', name: 'Crown power', cost: 1 },
    prev: 'cake',
  },
];


export const TREE2: SkillTreeNode[] = [
  {
    skill: { id: 'ship', name: 'Ship Power', cost: 1 },
    next: 'diving',
  },
  {
    skill: { id: 'diving', name: 'Diving power', cost: 1 },
    next: 'lightning',
    prev: 'ship',
  },
  {
    skill: { id: 'lightning', name: 'Lightning power', cost: 1 },
    next: 'skull',
    prev: 'diving',
  },
  {
    skill: { id: 'skull', name: 'Skull power', cost: 1 },
    prev: 'lightning',
  },
];