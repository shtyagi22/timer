var args = process.argv.slice(2);
//args.sort(function(a, b){return a-b});

for (let arg of args) {
  time = 1000 * arg
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time)

}