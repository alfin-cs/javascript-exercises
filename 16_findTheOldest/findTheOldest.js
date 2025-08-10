const findTheOldest = function (people) {
  let year = new Date().getFullYear();
  let oldest = 0;
  let index = 0;
  let i = 0;
  let age;
  while (i < people.length) {
    let info = people[i];
    console.log(info);
    if (info.yearOfDeath === undefined) {
      age = year - info.yearOfBirth;
    } else {
      age = info.yearOfDeath - info.yearOfBirth;
    }
    age;
    console.log(info.yearOfDeath === undefined);
    if (age > oldest) {
      oldest = age;
      index = i;
    }
    i++;
  }
  return people[index];
};
const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
let a = findTheOldest(people);
a;
// Do not edit below this line
module.exports = findTheOldest;
