export type Answer = string | number | (string | number)[];
export type Solver = () => Answer;

const year = process.argv[2];

function logYear() {
  console.log(`Year ${year}:`);
}

function logAnswer(day: number, ...answers: (string | number)[]) {
  console.log(`- Day ${day}:`, ...answers);
}

async function solve() {
  logYear();
  
  for (let i = 1; i < 25; i++) {
    let solver: Solver;

    try {
      solver = (await import(`./${year}/${i}`)).default;
    } catch {
      logAnswer(i, '???');
      continue;
    }

    const answer = solver();

    if (Array.isArray(answer)) {
      logAnswer(i, ...answer);
    } else {
      logAnswer(i, answer);
    }
  }
}

solve().catch(console.error);