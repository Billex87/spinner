const symbols = ['|','/','-','|','-','\\','|'];
let time = 0;
for (const arr of symbols) {
  setTimeout(() => {
    process.stdout.write('\r' + arr + '  ');
  }, time);
  time += 200;
}

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);