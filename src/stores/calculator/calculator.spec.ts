import { toJS } from "mobx";
import { CalculatorStore } from "./calculator";
import { TREE1 } from "./calculator.const";
import { TREE2 } from "./calculator.const";

describe('CalculatorStore', () => {
  
  describe('assingPoint', () => { 
    test('assigns point successfully', () => {
      const calculatorStore = new CalculatorStore();
      calculatorStore.assingPoint('path1', 'stack');
      expect(toJS(calculatorStore['takenSkills'])).toEqual(new Set(['path1-stack']));
      expect(calculatorStore.takenPoints).toBe(1);
    });

    test('does not assign point if skill is already taken', () => {
      const calculatorStore = new CalculatorStore();
      calculatorStore.assingPoint('path1', 'stack');
      calculatorStore.assingPoint('path1', 'stack');
      expect(toJS(calculatorStore['takenSkills'])).toEqual(new Set(['path1-stack']));
      expect(calculatorStore.takenPoints).toBe(1);
    });

    test('does not assign point if previous skill is not selected', () => {
      const calculatorStore = new CalculatorStore();
      calculatorStore.assingPoint('path1', 'food', 'stack');
      expect(toJS(calculatorStore['takenSkills'])).toEqual(new Set());
      expect(calculatorStore.takenPoints).toBe(0);
    });

    test('show error when all point are spent', () => {
      /**
       * It's pretty ugly way to mock window API, better would to mock it before the starting all the tests
       *  */ 
      window.alert = vi.fn();
      const calculatorStore = new CalculatorStore();
      calculatorStore.skillPoints = 1;
      calculatorStore.assingPoint('path1', 'stack');
      calculatorStore.assingPoint('path2', 'ship');
      expect(window.alert).toBeCalledTimes(1);
    })
  });
  
  describe('removePoint', () => {
    test('removes point successfully', () => {
      const calculatorStore = new CalculatorStore();
      calculatorStore.assingPoint('path1', 'stack');
      expect(toJS(calculatorStore['takenSkills'])).toEqual(new Set(['path1-stack']));
      calculatorStore.removePoint('path1', 'stack');
      expect(toJS(calculatorStore['takenSkills'])).toEqual(new Set([]));
      expect(calculatorStore.takenPoints).toBe(0);
    });

    test('does not remove point if skill is not taken', () => {
      const calculatorStore = new CalculatorStore();
      calculatorStore.assingPoint('path1', 'stack');
      calculatorStore.removePoint('path1', 'food');
      expect(toJS(calculatorStore['takenSkills'])).toEqual(new Set(['path1-stack']));
      expect(calculatorStore.takenPoints).toBe(1);
    });

    test('does not remove point if next skill is selected', () => {
      const calculatorStore = new CalculatorStore();
      calculatorStore.assingPoint('path1', 'stack');
      calculatorStore.assingPoint('path1', 'food', 'stack');
      calculatorStore.removePoint('path1', 'stack', 'food');
      expect(toJS(calculatorStore['takenSkills'])).toEqual(new Set(['path1-stack', 'path1-food']));
      expect(calculatorStore.takenPoints).toBe(2);
    });
   });

   
  describe('isSkillSelected', () => { 
    test('returns true if skill is selected', () => {
      const calculatorStore = new CalculatorStore();
      calculatorStore.assingPoint('path1', 'stack');
      expect(calculatorStore.isSkillSelected('path1', 'stack')).toBe(true);
    });
  });

  describe('skillsMap', () => { 
    test('returns skills map', () => {
      const calculatorStore = new CalculatorStore();
      calculatorStore.skillTreeMap = {
        path1: [TREE1[0]],
        path2: [TREE2[0]]
      }
      const skillsMap = calculatorStore.skillsMap;
      expect(skillsMap).toEqual({
        ship:  {
          cost: 1,
          id: 'ship',
          name: 'Ship Power',
        },
        stack:  {
          cost: 1,
          id: 'stack',
          name: 'Stack Power',
        },
      });
    });
   })
});