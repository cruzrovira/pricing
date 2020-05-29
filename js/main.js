function promotion() {
  let priceBasic = document.getElementById("priceBasic");
  let priceProfessional = document.getElementById("priceProfessional");
  let priceMaster = document.getElementById("priceMaster");

  priceBasic.classList.toggle("monthly");

  if (priceBasic.classList.contains("monthly")) {
    priceBasic.innerText = "$19.99";
    priceProfessional.innerText = "$24.99";
    priceMaster.innerText = "$39.99";
  } else {
    priceBasic.innerText = "$199.99";
    priceProfessional.innerText = "$249.99";
    priceMaster.innerText = "$399.99";
  }
}
