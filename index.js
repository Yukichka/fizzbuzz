printFizzBuzz = () => {
  var print = "";
  var n;
  for (n = 1; n <= 100; n++) {
    if (n % 3 === 0) {
      if (n % 5 === 0) {
        print += "FizzBuzz\n";
      } else print += "Fizz\n";
    } else if (n % 5 === 0) {
      print += "Buzz\n";
    } else print += n + "\n";
  }
  return print;
};
printFizzBuzz();