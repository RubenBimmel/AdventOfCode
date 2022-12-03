import InputReader from '../../shared/input-reader';
import { Answer } from '../../main';
import { it } from 'node:test';

const input = mapInput();

function mapInput(): string[] {
  const reader = new InputReader('2022/3/input.txt');
  return reader.rows;
}

function getSharedItem(lists: string[]) {
  return lists[0].split('').find(item => lists.slice(1).every(list => list.includes(item)));
}

function getItemValue(item: string) {
  if (/[a-z]/.test(item)) {
    return item.charCodeAt(0) - 96;
  }
  if (/[A-Z]/.test(item)) {
    return item.charCodeAt(0) - 38;
  }
  throw new Error('Invalid item');
}

function part1() {
  return input
    .map(string => [string.slice(0, string.length / 2), string.slice(string.length / 2)])
    .map(getSharedItem)
    .map(getItemValue)
    .reduce((sum, value) => sum + value);
}

function part2() {
  let sum = 0;
  
  for (let i = 0; i < input.length; i += 3) {
    sum += getItemValue(getSharedItem(input.slice(i, i + 3)));
  }
  
  return sum;
}

export default function solve(): Answer {
  return [part1(), part2()];
}