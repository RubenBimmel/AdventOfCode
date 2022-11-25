import InputReader from '../../shared/input-reader';
import { Answer } from '../../main';

type inputRow = {
  direction: 'forward' | 'down' | 'up';
  units: number;
}

const input: inputRow[] = mapInput();

function mapInput() {
  const reader = new InputReader('2021/2/input.txt');

  return reader.rows.map((value) => ({
    direction: value.split(' ')[0],
    units: parseInt(value.split(' ')[1],10),
  }));
}

function part1() {
  let horizontal = 0;
  let depth = 0;
  
  input.forEach(command => {
    switch (command.direction) {
      case 'forward':
        horizontal += command.units;
        break;
      case 'down':
        depth += command.units;
        break;
      case 'up':
        depth -= command.units;
        break;
    }
  });

  return horizontal * depth;
}

function part2() {
  let aim = 0;
  let horizontal = 0;
  let depth = 0;

  input.forEach(command => {
    switch (command.direction) {
      case 'forward':
        horizontal += command.units;
        depth += aim * command.units;
        break;
      case 'down':
        aim += command.units;
        break;
      case 'up':
        aim -= command.units;
        break;
    }
  });

  return horizontal * depth;
}

export default function solve(): Answer {
  return [part1(), part2()];
}