//Spread operator

//spojovanie poli
const studentsGroup = ['david', 'jana', 'martina'];
const allStudents = ['harry', 'ron', ...studentsGroup, 'hermiona'];
console.log(allStudents);

//argumenty funkcii
const numbers = [1, 2, 3];
const multipleNumbers = (a, b, c) => {
  console.log(a * b * c);
};
multipleNumbers(...numbers);

//Kopirovanie poli
const students1 = ['jan', 'monika', 'dalibor'];
const students2 = [...students1];
students2.push('pavel');
console.log(students1);
console.log(students2);

//concatenate
const names1 = ['david', 'janko'];
const names2 = ['michal', 'andrej'];
const newArray1 = names1.concat(names2);
const newArray2 = [...names1, ...names2];
newArray2.push('teodor');
console.log(newArray1);
console.log(newArray2);

//Rest operator
const sum = (...allNumbers) => {
  let result = 0;
  for (const oneNumber of allNumbers) {
    // result = result + oneNumber
    result += oneNumber;
  }
  return result;
};
console.log(1, 2);
console.log(1, 2, 3);
console.log(1, 2, 13, 10);
console.log(1, 2, 30, 40, 99);
