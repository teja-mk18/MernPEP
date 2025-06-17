
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

const person = {
    name:'Likhilesh',
    height:'2',
    weight:'100',
    college:'LPU',
    rollNumber:'12',
    getBMI: ()=>{
        const bmi =person.weight / (person.height * person.height);
        console.log(`BMI for ${this.name} is ${bmi}`);
        if(bmi<20){
            console.log("He is underweight");
        } else if(bmi>=20 && bmi<25){
            console.log("He is normal");
        } else if(bmi>=25 && bmi<30){
            console.log("He is overweight");
        } else {
            console.log("He is obese");
        }   
    },

};

person.getBMI();

person.weight = 90;

person.getBMI();

const allKeys = Object.keys(person);
console.log("All keys:", allKeys);
const allValues = Object.values(person);
console.log("All values:", allValues);
const allEntries = Object.entries(person);
console.log("All entries:", allEntries);



