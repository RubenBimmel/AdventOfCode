import * as fs from 'fs';

export default class InputReader {
  readonly input;

  constructor(path: string) {
    this.input = fs.readFileSync(path,'utf8');
  }
  
  get rows() {
    return this.input.split(/\r?\n|\r|\n/g);
  }
}