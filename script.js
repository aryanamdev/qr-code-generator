let qrValue = document.querySelector("input");
let button = document.querySelector("button");
let qrWrapper = document.querySelector(".qr-wrapper");
let qr = document.querySelector(".qr-wrapper img");

button.addEventListener("click", () => {
  let qrText = qrValue.value;
  console.log(qrText);
  qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`;
  qrWrapper.classList.add("active");
  if (qrValue.innerText.length == 0) {
    return;
  }
});
