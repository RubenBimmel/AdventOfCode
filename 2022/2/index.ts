import InputReader from '../../shared/input-reader';
import { Answer } from '../../main';

const input: string[] = mapInput();

function mapInput() {
  const reader = new InputReader('2022/2/input.txt');
  return reader.rows;
}

function getScore1(game: string): number {
  const [opponent, me] = game.split(' ');

  switch (me) {
    case 'X':
      switch (opponent) {
        case 'A':
          return 4;
        case 'B':
          return 1;
        case 'C':
          return 7;
        default:
          throw new Error('Unknown opponent shape');
      }
    case 'Y':
      switch (opponent) {
        case 'A':
          return 8;
        case 'B':
          return 5;
        case 'C':
          return 2;
        default:
          throw new Error('Unknown opponent shape');
      }
    case 'Z':
      switch (opponent) {
        case 'A':
          return 3;
        case 'B':
          return 9;
        case 'C':
          return 6;
        default:
          throw new Error('Unknown opponent shape');
      }
    default:
      throw new Error('Unknown shape');
  }
}

function getScore2(game: string): number {
  const [opponent, shouldWin] = game.split(' ');

  switch (shouldWin) {
    case 'X':
      switch (opponent) {
        case 'A':
          return 3;
        case 'B':
          return 1;
        case 'C':
          return 2;
        default:
          throw new Error('Unknown opponent shape');
      }
    case 'Y':
      switch (opponent) {
        case 'A':
          return 4;
        case 'B':
          return 5;
        case 'C':
          return 6;
        default:
          throw new Error('Unknown opponent shape');
      }
    case 'Z':
      switch (opponent) {
        case 'A':
          return 8;
        case 'B':
          return 9;
        case 'C':
          return 7;
        default:
          throw new Error('Unknown opponent shape');
      }
    default:
      throw new Error('Unknown shape');
  }
}

function part1() {
  return input.map(getScore1).reduce((sum, value) => sum + value);
}

function part2() {
  return input.map(getScore2).reduce((sum, value) => sum + value);
}

export default function solve(): Answer {
  return [part1(), part2()];
}