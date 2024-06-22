let userInput = document.getElementById("userInput");
let toFahrenheit = document.getElementById("toFahrenheit");
let toCelius = document.getElementById("toCelius");
let result = document.getElementById("result")
function answer(){
  let temp = Number(userInput.value)
  if (toFahrenheit.checked){
    let formula = temp * 9/5 + 32;
    result.textContent = "The Temp is "+formula.toFixed(2) +"℉";
  }
  else if (toCelius.checked){
    let formula =  9/5 * temp-32;
    result.textContent = "The Temp is "+formula.toFixed(2) +"℃";
  }
  else{
    result.textContent = "Please select a unit"
  }
  
}