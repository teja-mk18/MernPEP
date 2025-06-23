// console.log("hello");

// let newDate = null;

// const handleDateChange = (e) => {
//   newDate = new Date(e.target.value);
//   console.log("🟠:newDate:", newDate);
//   const targetMilliseconds = newDate.getTime();
//   console.log("🟠:targetMilliseconds:", targetMilliseconds);
//   const currentTimeINMilliseconds = Date.now();
//   console.log("🟠:currentTimeINMilliseconds:", currentTimeINMilliseconds);
//   const diffInSeconds = (targetMilliseconds - currentTimeINMilliseconds) / 1000;
//   console.log("🟠:diffInSeconds:", diffInSeconds);
// };
//---------------gurgaon-----------------
const processPayement = (cb) => {
  cb();
  cb();
};

//----------hyderabad--------------------

const processTicketBooking = () => {};

// ---------------------------- Manager

processPayment(processTicketBooking); //IoC

// callback Hell
