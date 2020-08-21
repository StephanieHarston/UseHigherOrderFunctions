const squareList = (arr) => {
  return arr
           .filter(integer => Number.isInteger(integer) === true && integer > 0)
            .map(integer => integer * integer)

};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
