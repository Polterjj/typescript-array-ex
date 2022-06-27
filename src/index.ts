interface Runner {
  name: string;
  time: number;
  fastestTime: boolean;
}

const runnerTimes: Runner[] = [
  { name: "Jeff", time: 20, fastestTime: false },
  { name: "Amber", time: 10, fastestTime: true },
  { name: "Greg", time: 6, fastestTime: true },
  { name: "Sarah", time: 15, fastestTime: false },
  { name: "Tom", time: 25, fastestTime: false },
];

// Declare a function named addRunnerTime
// Parameter(s): array, newName, newTime
// Functionality: construct an object and push it into the array. The object must have the same properties as the objects already in the array. Use conditional statements to set the value for the fastestTime property to true if the time is greater than 10 and false otherwise.

function addRunnerTime(array: Runner[], newName: string, newTime: number) {
  const newRunner: Runner = {
    name: newName,
    time: newTime,
    fastestTime: newTime > 10 ? true : false,
  };

  array.push(newRunner);
}

addRunnerTime(runnerTimes, "JJ", 30);

// console.log(runnerTimes);

// Declare a function named deleteRunnerTimeByIndex
// Parameter(s): array, index
// Functionality: remove the object from the array at the specified index using the splice method.

function deleteRunnerTimeByIndex(array: Runner[], index: number) {
  array.splice(index, 1);
}

deleteRunnerTimeByIndex(runnerTimes, 2);
console.log(runnerTimes);

// Declare a function named deleteRunnerTimeByName
// Parameter(s): array, name
// Functionality: remove the object from the array that has the provided name.  Incorporate the findIndex method and the splice method.

function deleteRunnerTimeByName(array: Runner[], name: string) {
  const index = array.findIndex((runner) => runner.name === name);
  array.splice(index, 1);
}

deleteRunnerTimeByName(runnerTimes, "tom");
console.log(runnerTimes);

// Declare a function named editRunnerTime
// Parameter(s): array, index, time
// Functionality: update an object's time in the array at the specified index. Use conditional statements to set the value for the fastestTime property to true if the time is less than or equal to 10 and false otherwise.

function editRunnerTime(array: Runner[], index: number, time: number) {
  const updatedRunner: Runner = {
    name: array[index].name,
    time,
    fastestTime: time <= 10 ? true : false,
  };
  array.splice(index, 1, updatedRunner);
}

editRunnerTime(runnerTimes, 4, 9);
console.log;
// continued on the next page…
// Declare a function named findRunnerTimeByName
// Parameter(s): array, name
// Functionality: return the object in the array that has the provided name. Use the find method.

function findRunnerTimeByName(array: Runner[], name: string) {
  return array.find((runner) => runner.name === name);
}

const runner = findRunnerTimeByName(runnerTimes, "Jeff");
console.log(runner);

// Declare a function named findLowestTime
// Parameter(s): array
// Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.

function findLowestTime(array: Runner[]) {
  let lowestRunner = array[0];
  array.forEach((runner) => {
    if (runner.time < lowestRunner.time) {
      lowestRunner = runner;
    }
  });
  return runner;
}

const lowestTimeRunner = findLowestTime(runnerTimes);
console.log(lowestTimeRunner);

// Declare a function named findAverageTime
// Parameter(s): array
// Functionality: return the average quiz score.  Use a for...of loop.

function findAverageTime(array: Runner[]) {
  let sumOfTimes: number = 0;
  for (let runner of array) {
    sumOfTimes += runner.time;
  }
  return sumOfTimes / array.length;
}

const averageTime = findAverageTime(runnerTimes);
console.log(averageTime);

// Declare a function named filterPassing
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have fastest times i.e. (fastestTime = true).

function filterPassing(array: Runner[]) {
  return array.filter((runner) => runner.fastestTime === true);
}

const fastestTimes = filterPassing(runnerTimes);
console.log(fastestTimes);

// Declare a function named filter90AndAbove
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.
