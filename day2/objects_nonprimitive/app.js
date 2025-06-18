// // const cse018Name = "Subhodeep";
// // const cse018Address = "Kolkata, WB";
// // const cse018BloodGroup = "O-";

// const cse018 = {
//     name: "Subhodeep",
//     address: "Kolkata, WB",
//     bloodGroup: "O-",
// };

// // console.log(cse018);
// // READ the value of a property
// const studentName = cse018.name;
// console.log("StudentName:",studentName);

// // UPDATE the value of a property
// cse018.bloodGroup = "A+";

// // add a key-value pair
// cse018.college = "LPU";

// console.log("cse018:", cse018);

// // delete a key-value pair
// delete cse018.address;
// console.log("cse018:", cse018);

// //--------------------------------

// const person = {
//     name:'Likhilesh',
//     height:'2',
//     weight:'100',
//     college:'LPU',
//     rollNumber:'12',
//     getBMI: ()=>{
//         const bmi =person.weight / (person.height * person.height);
//         console.log(`BMI for ${this.name} is ${bmi}`);
//         if(bmi<20){
//             console.log("He is underweight");
//         } else if(bmi>=20 && bmi<25){
//             console.log("He is normal");
//         } else if(bmi>=25 && bmi<30){
//             console.log("He is overweight");
//         } else {
//             console.log("He is obese");
//         }   
//     },

// };

// person.getBMI();

// person.weight = 90;

// person.getBMI();

// const allKeys = Object.keys(person);
// console.log("All keys:", allKeys);
// const allValues = Object.values(person);
// console.log("All values:", allValues);
// const allEntries = Object.entries(person);
// console.log("All entries:", allEntries);



// ----------------- Dynamic value access-------------------------------

// const person = {
//     name: "Likhilesh",
//     height: 2, //meters
//     weight: 100, //kg
//     college: "LPU",
//     rollNumber: "1234",
// };

// // READ
// // const clg = person.college;
// // console.log(clg);

// const whichKey = prompt("What value do you want?");
// console.log("🟡 : whichKey:", whichKey);
// // const clg = person.college;
// // const clg = person["college"];
// const clg = person[whichKey];
// console.log("🟡 : clg:", clg);

// ---------------------------------------

// const person1 = {
//     name: "Likhilesh",
//     height: 2, //meters
//     weight: 100, //kg
//     college: "LPU",
//     rollNumber: "1234",
// };

// const person2 = person1;

// person1.name = "Mohan";
// person2.name = "Raj";

// console.log("person1", person1);
// console.log("person2", person2);

// -------------------------

// const person1 = {
//     name: "Likhilesh",
//     height: 2, //meters
//     weight: 100, //kg
//     college: "LPU",
//     rollNumber: "1234",
// };

// // ---------- De-structuring
// const { weight, college } = person1;
// console.log("🟡 : --> :", weight, college);

// -------------------------------------

const person1 = {
    name: "Likhilesh",
    height: 2, //meters
    weight: 100, //kg
    college: "LPU",
    rollNumber: "1234",
    marks: {
        EVS: 42,
        maths: 25,
    },
};

const person2 = { ...person1 };

person2.name = "Rajesh";

person2.marks.maths = 49;

console.log("person1", person1);
console.log("person2", person2);