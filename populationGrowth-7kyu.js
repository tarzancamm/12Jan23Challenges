// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

const nbYear = (p0, percent, aug, p) => {
  let newPop = p0;
  let numYears = 0

  let truePercent = percent / 100

  while (newPop < p) {
    newPop += ((newPop * truePercent) + aug);
    numYears++
    // console.log(newPop)
  }
  return numYears
};

console.log(nbYear(1500, 5, 100, 5000)); //15
