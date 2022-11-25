import InputReader from '../../shared/input-reader';
import { Answer } from '../../main';

const input: number[] = mapInput();

function mapInput() {
  const reader = new InputReader('2021/1/input.txt');
  return reader.rows.map((value) => parseInt(value, 10));
}

function part1() {
  return input.map((value, index) => index > 0 && value > input[index - 1]).filter(Boolean).length;
}

function part2() {
  return input.map((value, index) => index > 0 && index + 2 < input.length && input[index + 2] > input[index - 1]).filter(Boolean).length;
}

export default function solve(): Answer {
  return [part1(), part2()];
}