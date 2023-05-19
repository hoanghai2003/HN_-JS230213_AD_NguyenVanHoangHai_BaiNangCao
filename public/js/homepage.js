let inputOne = document.querySelector(".inputOne");
let inputTwo = document.querySelector(".inputTwo");
let inputThree = document.querySelector(".inputThree");
let inputFor = document.querySelector(".inputFor");

function senData(data) {
  fetch("http://localhost:3003/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        console.log("du lieu gui thanh cong");
      } else {
        console.log("loi du lieu");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleClick() {
  let valueOne = inputOne.value;
  let valueTwo = inputTwo.value;
  let valueThree = inputThree.value;
  let valueFour = inputFor.value;

  let data = {
    valueOne: valueOne,
    valueTwo: valueTwo,
    valueThree: valueThree,
    valueFour: valueFour,
  };

  // gui du lieu len data
  senData(data);
  // window.location.href = "/round";
}
let sendButton = document.querySelector("#sendButton");
sendButton.addEventListener("click", handleClick);
