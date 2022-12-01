import InputReader from '../../shared/input-reader';
import { Answer } from '../../main';

const input: number[] = mapInput();

function mapInput() {
  const reader = new InputReader('2022/1/input.txt');
  return reader.rows.map(value => parseInt(value, 10));
}

function part1() {
  let maxValue = 0;
  let tempValue = 0;
  
  for (let i = 0; i < input.length; i++) {
    if (input[i]) {
      tempValue += input[i];
    } else {
      maxValue = Math.max(maxValue, tempValue);
      tempValue = 0;
    }
  }
  
  return maxValue;
}

function part2() {
  const values: number[] = [];
  let tempValue = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i]) {
      tempValue += input[i];
    } else {
      values.push(tempValue);
      tempValue = 0;
    }
  }

  return values.sort().slice(-3).reduce((sum, value) => sum + value);
}

export default function solve(): Answer {
  return [part1(), part2()];
}