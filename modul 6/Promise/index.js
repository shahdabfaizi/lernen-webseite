async function asyncFunction() {
  return 1;
}

async function main() {
  console.log("erster");
  let counter = 0;
  console.log(counter);
  let i = 0;
  while (i < 100000000) {
    i++;
  }

  const result = await new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Mitte");
      counter = 100;
      console.log(counter);
      resolve(counter);
    }, 1000);
  });

  //  .then((result) => {
  //   console.log("Result: " + result);
  // })
  // .catch((error) => {
  //    console.log("Error: " + error);
  //  })
  //  .finally(() => {
  //     console.log("Finally");
  //  });

  console.log("Result" + result);

  console.log("zweites");
  counter = 5;
  console.log(counter);
}

console.log("Start");
main();
console.log("Ende");
