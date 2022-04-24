const profileDataArgs = process.argv.slice(2, process.argv.length);

console.log(profileDataArgs);

const animalArray = ["dog", "cat", "pig"];

animalArray.push("cow");

const personObj = {
  name: "Lernantino",
  age: 99,
};

personObj.age = 100;
personObj.occupation = "Developer";

const printProfileData = (profileDataArr) => {
  // for (let i = 0; i < profileDataArr.length; i = +1) {
  //   console.log(profileDataArr[i]);
  // }
  // console.log("================");

  profileDataArr.forEach((profileItem) => console.log(profileItem));
};

const addNums = (numOne, numTwo) => numOne + numTwo;

const sum = addNums(5, 3);

console.log(sum);
