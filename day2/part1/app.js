// console.log("Hello from JS!");
// const printBill = function(txt) {
//     console.log("--------------------------");
//     console.log("Rs.", txt);
//     console.log("--------------------------");
// };

const printBill = (txt) => {
    console.log("--------------------------");
    console.log("Rs.",txt);
    console.log("--------------------------");
};

const calculateBillAmountForFood = (price) => {
    return price * 1.05;
};
const calculateBillAmountForClothes = (price) => {
    return price * 1.12;
};
const calculateBillAmountForDrinks = (price) => {
    return price * 1.2;
};
// Higher order function -> a function that takes other functions as arguments or returns a function
// Callback function -> a function that is passed as an argument to another function and is executed later

// const genarateBill = (food, clothes,drinks) => {
//     const foodAmount = calculateBillAmountForFood(food);
//     const clothesAmount = calculateBillAmountForClothes(clothes);
//     const drinksAmount = calculateBillAmountForDrinks(drinks);
//     const totalAmount = foodAmount + clothesAmount + drinksAmount;
//     printBill(totalAmount);
// };

// genarateBill(100, 400, 100);

const generateBill = (food, clothes, drinks, func) => {
    // HoF
    const foodAmount = calculateBillAmountForFood(food);
    const clothesAmount = calculateBillAmountForClothes(clothes);
    const drinksAmount = calculateBillAmountForDrinks(drinks);

    const finalAmount = foodAmount + clothesAmount + drinksAmount;
    func(finalAmount);
};

const foodPrice = 100;
generateBill(foodPrice, 400, 100, printBillForAll); // printBillForAll is a callback

generateBill(100, 400, 0, printBillForFoodAndDrinks); // printBillForFoodAndDrinks is a callback
generateBill(200, 0, 0, printBillForFood); // printBillForFood is a callback