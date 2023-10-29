import styles from './Calculator.module.css';
import { CalculatorBody } from './CalculatorBody/CalculatorBody';
import { CalculatorHeader } from './CalculatorHeader/CalculatorHeader';

export const Calculator = () => {
  return (
    <div className={styles.root}>
      <CalculatorHeader />
      <CalculatorBody />
    </div>
  );
};
