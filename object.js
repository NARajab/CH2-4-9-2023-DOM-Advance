// let student1 = {
//   name: "ale",
//   age: 28,
//   programmingLanguage: ["PHP", "C++", "C#", "Golang", "Javascript", "Java"]
// };

// let student2 = {
//   name: "yoga",
//   age: 55,
//   programmingLanguage: ["Love","Javascript"]
// };

// let student3 = {
//   name: "Fadlan",
//   age: 28,
//   programmingLanguage: ["India", "Javascript"],
// };

// constructor function
function StudentFSW(name, age, programmingLanguage) {
  this.name = name;
  this.age = age;
  this.programmingLanguage = programmingLanguage;
}

student1 = new StudentFSW("Adrian", 20, "java");
student2 = new StudentFSW("Hafizh", 18, "Javascript");
student3 = new StudentFSW("Diki", 22, "Golang");

console.log(student1.age);
