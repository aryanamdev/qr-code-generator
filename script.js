let qrValue = document.querySelector("input");
let button = document.querySelector("button");
let qr = document.querySelector(".qr-wrapper img");

button.addEventListener("click", () => {
  let qrText = qrValue.value;
  console.log(qrText);
  qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`;
});
