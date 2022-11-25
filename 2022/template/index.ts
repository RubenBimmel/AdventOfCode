import InputReader from '../../shared/input-reader';
import { Answer } from '../../main';

const input: number[] = mapInput();

function mapInput() {
  const reader = new InputReader('2022/[day]/input.txt');
  return reader.rows;
}

function part1() {
  return '???';
}

export default function solve(): Answer {
  return [part1()];
}