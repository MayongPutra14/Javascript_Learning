const prompt = require("prompt-sync")();
const computerFighter = ["Gunting", "Kertas", "Batu"];
let fighter = [];

for (let i = 0; i < computerFighter.length; i++) {
  // Fighter menu
  console.log("===================");
  console.log("# Pilihan Fighter #");
  console.log("===================");
  
  // Loop kedua menggunakan 'j' agar tidak bingung dengan 'i' di loop pertama
  // proses menamilkan fighter
  for (let j = 0; j < computerFighter.length; j++) { 
    const fighterText = `[${j + 1}] ${computerFighter[j]}`;
    const paddedFighterText = fighterText.padEnd(16); 
    console.log(`# ${paddedFighterText}#`);
  }

  // Push user choose into fighter array
  console.log("===================");
  let input = prompt(`Pilih Fighter ke-${i + 1} Anda:`);
  fighter.push(parseInt(input - 1));
  console.clear();
}

let i = 0; // counter match
let playerPoint = 0; // player Point
let computerPoint = 0; // Computer Point
let draw = 0; // draw point

function finalResult() {
  if (i == computerFighter.length) {
    clearInterval(intervalId);

    setTimeout(() => { 
      console.clear();
      console.log("=".repeat(21));
      console.log("#".padEnd(3), "Final Result", "#".padStart(4));
      console.log("=".repeat(21));
      console.log(`> Player score:${''.padEnd(2)} ${playerPoint} #`);
      console.log(`> Computer score: ${computerPoint} #`);
      console.log(`> draw score:${''.padEnd(4)} ${draw} #`);
      console.log("=".repeat(21));
      if (playerPoint > computerPoint) {
        console.log("Player is the Champion!!");
      } else if (playerPoint === computerPoint) {
        console.log("".padStart(5), "Draw!!");
      } else {
        console.log("Computer is the Champion!!");
      }
    }, 2000);
  }
}

// print every match within 2 second interval
const intervalId = setInterval(() => {
  console.clear();
  const index = Math.floor(
    (Math.random() * computerFighter.length) % computerFighter.length
  ); // Generate random Number to take Computer fight
  const playerChoise = computerFighter[fighter[i]];
  const computerChoise = computerFighter[index];

  console.log("=".repeat(21));
  console.log(`${"=".padEnd(5)} Round ${i + 1} ${"=".padStart(6)} `);
  console.log("=".repeat(21));
  console.log(`${"".padEnd(1)}${playerChoise} Vs ${computerChoise}`);

  if (playerChoise === computerChoise) {
    console.log("".padEnd(5), "Draw!!");
    draw++;
  } else if (
    (fighter[i] === 0 && index === 1) ||
    (fighter[i] === 1 && index === 2) ||
    (fighter[i] === 2 && index === 0)
  ) {
    console.log(" ".padStart(2), "Player Win!");
    playerPoint++;
  } else {
    console.log(" ".padStart(1), "Computer Win!");
    computerPoint++;
  }

  i++;

  finalResult() // call function
  
}, 1500);
