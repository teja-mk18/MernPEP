const title = document.getElementById("greetings");

const handleUserName = (e) => {
  // console.log("typed");
  // console.log("----");
  // console.log(e);
  const elem = e.target;
  console.log(elem.value);
  title.innerText = `Hello ${elem.value}!`;
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log(e);
  //   const input1 = e.target[0].value;
  //   const input2 = e.target[1]value;
  //   const input3 = e.target[2]value;
  const username2 = e.target.usernameTemp.value;
  const email2 = e.target.baseEmail.value;
  const password2 = e.target.abcdPassword.value;

  if (!email2.endsWith("@lpu.in")) {
    alert("Please enter a valid LPU email address.");
  } else {
  }
};
