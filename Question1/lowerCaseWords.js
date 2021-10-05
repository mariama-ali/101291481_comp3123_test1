const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

const lowerCaseWords = (array) => {
    return new Promise((resolve, reject) => {
        if (array.length >= 0) {
            const filterArr= array.filter((arr) => typeof arr === "string");
            const newArray = filterArr.map((item) => item.toLowerCase());
            resolve(newArray);
        } else {
            reject("Array Not Fount!");
        }
    });
};
  
lowerCaseWords(mixedArray).then((successMessage) =>console.log(successMessage))
    .catch((error) => console.log(error));
