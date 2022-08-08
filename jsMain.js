// selecting elements

const websiteHeading = document.getElementById("website-heading");
const temperatureFormat = document.getElementById("temperature-format");
const underlineHeading = document.getElementById("underline-heading");
const putValue = document.getElementById("putValue");
const submitValue = document.getElementById("submitValue");
const showResult = document.getElementById("showResult");
const fromSelection = document.getElementById("fromTemperature");
const toSelection = document.getElementById("toTemperature");
const ghostBg = document.getElementsByClassName("ghostBg");
const ghost1 = document.getElementById("bg1");
const ghost2 = document.getElementById("bg2");
const ghost3 = document.getElementById("bg3");
const ghost4 = document.getElementById("bg4");
const ghost5 = document.getElementById("bg5");
const ghost6 = document.getElementById("bg6");
const designImg1 = document.getElementById("designImg1");
const designImg2 = document.getElementById("designImg2");
const designImg3 = document.getElementById("designImg3");
const designImg4 = document.getElementById("designImg4");
const designImg5 = document.getElementById("designImg5");
const designImg6 = document.getElementById("designImg6");
const designImg7 = document.getElementById("designImg7");
const designImg8 = document.getElementById("designImg8");
const designImg9 = document.getElementById("designImg9");

// variables

// event listners

websiteHeading.addEventListener("mouseover", moveHeading);
putValue.addEventListener("mouseover", valueEnter1);
putValue.addEventListener("mouseout", valueEnter2);
submitValue.addEventListener("mouseover", submitV1);
submitValue.addEventListener("mouseout", submitV2);
submitValue.addEventListener("click", showAnswer);
fromSelection.addEventListener("click", () => {
  moveiconsBack();
  showResult.style.opacity = "0";
});

// function

function moveHeading() {
  websiteHeading.style.top = "0px";
  websiteHeading.style.fontSize = "4em";
  temperatureFormat.style.display = "flex";

  setTimeout(() => {
    temperatureFormat.style.opacity = "1";
  }, 300);
  setTimeout(() => {
    underlineHeading.style.width = "100%";
  }, 1050);
  ghost1.style.opacity = "1";
  setTimeout(() => {
    ghost1.style.opacity = "0";
    ghost2.style.opacity = "1";
  }, 1000);
  setTimeout(() => {
    ghost2.style.opacity = "0";
    ghost3.style.opacity = "1";
  }, 2000);
  setTimeout(() => {
    ghost3.style.opacity = "0";
    ghost4.style.opacity = "1";
  }, 3000);
  setTimeout(() => {
    ghost4.style.opacity = "0";
    ghost5.style.opacity = "1";
  }, 4000);
  setTimeout(() => {
    ghost5.style.opacity = "0";
    ghost6.style.opacity = "1";
  }, 5000);
  setTimeout(() => {
    ghost6.style.opacity = "0";
  }, 6000);
  setTimeout(() => {
    ghost6.style.opacity = "1";
    ghost5.style.opacity = "1";
    ghost4.style.opacity = "1";
    ghost3.style.opacity = "1";
    ghost2.style.opacity = "1";
    ghost1.style.opacity = "1";
  }, 7000);
}

function kelvinToCelsius(temp) {
  return temp - 273.15;
}
function celsiusToKelvin(temp) {
  return temp + 273.15;
}
function kelvinToFahernhiet(temp) {
  return (temp - 273.15) * 1.8 + 32;
}
function fahernhietToKelvin(temp) {
  return (temp - 32) / 1.8 + 273.15;
}
function kelvinToRankine(temp) {
  return (temp * 9) / 5;
}
function rankineToKelvin(temp) {
  var ans = (temp * 5) / 9;
  return ans;
}
// ===
function celsiusToFahernhiet(temp) {
  return temp * 1.8 + 32;
}
function fahernhietToCelsius(temp) {
  return (temp - 32) / 1.8;
}

function celsiusToRankine(temp) {
  return (temp + 273.15) * 1.8;
}
function RankineToCelsius(temp) {
  return temp / 1.8 - 273.15;
}
// ==
function fahernhietToRankine(temp) {
  return temp + 459.67;
}
function rankinetoFahernhiet(temp) {
  return temp - 459.67;
}

function valueEnter1() {
  putValue.style.padding = "5px";
  putValue.style.border = "3px solid black";
  submitValue.style.padding = "5px";
  putValue.style.height = "45px";
  putValue.style.width = "120px";
  moveiconsBack();
}
function valueEnter2() {
  putValue.style.padding = "0px";
  putValue.style.border = "1px solid black";
  submitValue.style.padding = "0px";
  putValue.style.height = "25px";
  putValue.style.width = "100px";
}

function submitV1() {
  submitValue.style.padding = "5px";
  submitValue.style.border = "3px soild black";
  putValue.style.height = "45px";
  putValue.style.width = "120px";
}
function submitV2() {
  submitValue.style.padding = "0px";
  submitValue.style.border = "1px soild black";
  putValue.style.height = "25px";
  putValue.style.width = "100px";
}
function showAnswer() {
  showResult.style.opacity = "1";
  setTimeout(() => {
    showResult.style.opacity = "0";
  }, 7000);
}

function moveicons() {
  designImg1.style.transform = "translate(-1000px,-2000px)";
  setTimeout(() => {
    designImg1.style.opacity = "0";
  }, 400);
  designImg2.style.transform = "translate(-1000px,0px)";
  setTimeout(() => {
    designImg2.style.opacity = "0";
  }, 400);
  designImg3.style.transform = "translate(-1000px,2000px)";
  setTimeout(() => {
    designImg3.style.opacity = "0";
  }, 450);
  designImg4.style.transform = "translate(0px,-2000px)";
  setTimeout(() => {
    designImg4.style.opacity = "0";
  }, 450);
  designImg5.style.transform = "translate(500px,0px)";
  setTimeout(() => {
    designImg5.style.opacity = "0";
  }, 440);
  designImg6.style.transform = "translate(500px,400px)";
  setTimeout(() => {
    designImg6.style.opacity = "0";
  }, 450);
  designImg7.style.transform = "translate(0px,100px)";
  setTimeout(() => {
    designImg7.style.opacity = "0";
  }, 450);
  designImg8.style.transform = "translate(-2100px,200px)";
  setTimeout(() => {
    designImg8.style.opacity = "0";
  }, 450);
  designImg9.style.transform = "translate(100px,-2000px)";
  setTimeout(() => {
    designImg9.style.opacity = "0";
  }, 450);
  setTimeout(() => {
    designImg1.style.display = "none";
    designImg2.style.display = "none";
    designImg3.style.display = "none";
    designImg4.style.display = "none";
    designImg5.style.display = "none";
    designImg6.style.display = "none";
    designImg7.style.display = "none";
    designImg8.style.display = "none";
    designImg9.style.display = "none";
  }, 900);
}
function moveiconsBack() {
  designImg1.style.transform = "translate(0px,0px)";
  setTimeout(() => {
    designImg1.style.opacity = "0.7";
  }, 0);
  designImg2.style.transform = "translate(0px,0px)";
  setTimeout(() => {
    designImg2.style.opacity = "0.7";
  }, 0);
  designImg3.style.transform = "translate(0px,0px)";
  setTimeout(() => {
    designImg3.style.opacity = "0.7";
  }, 0);
  designImg4.style.transform = "translate(0px,0px)";
  setTimeout(() => {
    designImg4.style.opacity = "0.7";
  }, 0);
  designImg5.style.transform = "translate(0px,0px)";
  setTimeout(() => {
    designImg5.style.opacity = "0.7";
  }, 0);
  designImg6.style.transform = "translate(0px,0px)";
  setTimeout(() => {
    designImg6.style.opacity = "0.7";
  }, 0);
  designImg7.style.transform = "translate(0px,0px)";
  setTimeout(() => {
    designImg7.style.opacity = "0.7";
  }, 0);
  designImg8.style.transform = "translate(0px,0px)";
  setTimeout(() => {
    designImg8.style.opacity = "0.7";
  }, 0);
  designImg9.style.transform = "translate(0px,0px)";
  setTimeout(() => {
    designImg9.style.opacity = "0.7";
  }, 0);
  setTimeout(() => {
    designImg1.style.display = "flex";
    designImg2.style.display = "flex";
    designImg3.style.display = "flex";
    designImg4.style.display = "flex";
    designImg5.style.display = "flex";
    designImg6.style.display = "flex";
    designImg7.style.display = "flex";
    designImg8.style.display = "flex";
    designImg9.style.display = "flex";
  }, 0);
}

function showAnswer() {
  moveicons();

  showResult.style.opacity = "1";
  var selectedItem1 = fromSelection.value;
  //console.log(selectedItem);
  if (selectedItem1 == "kelvin") {
    console.log("check1");
    var selectedItem2 = toSelection.value;

    if (selectedItem2 == "celsius") {
      var temp = kelvinToCelsius(putValue.value);
      document.getElementById("result").innerHTML =
        "The temperature is " + temp + " celsius";
    } else if (selectedItem2 == "fahrenheit") {
      var temp = kelvinToFahernhiet(putValue.value);
      document.getElementById("result").innerHTML =
        "The temperature is " + temp + " fahernhiet";
    } else if (selectedItem2 == "rankine") {
      var temp = kelvinToRankine(putValue.value);
      document.getElementById("result").innerHTML =
        "The temperature is " + temp + " rankine";
    } else {
      document.getElementById("result").innerHTML = "Select the Value";
    }
  } else if (selectedItem1 == "celsius") {
    console.log("check2");

    var selectedItem2 = toSelection.value;
    if (selectedItem2 == "kelvin") {
      var temp = celsiusToKelvin(parseFloat(putValue.value));

      document.getElementById("result").innerHTML =
        "The coverted value is " + temp + " kelvin";
    } else if (selectedItem2 == "fahrenheit") {
      var temp = celsiusToFahernhiet(parseFloat(putValue.value));
      document.getElementById("result").innerHTML =
        "The coverted value is " + temp + " fahernhiet";
    } else if (selectedItem2 == "rankine") {
      var temp = celsiusToRankine(parseFloat(putValue.value));
      document.getElementById("result").innerHTML =
        "The coverted value is " + temp + " rankine";
    } else {
      document.getElementById("result").innerHTML = "Select the Value";
    }
  } else if (selectedItem1 == "fahrenheit") {
    console.log("check3");

    var selectedItem2 = toSelection.value;
    if (selectedItem2 == "celsius") {
      var temp = fahernhietToCelsius(parseFloat(putValue.value));
      document.getElementById("result").innerHTML =
        "The converted value is " + temp + " celsius";
    } else if (selectedItem2 == "kelvin") {
      var temp = fahernhietToKelvin(parseFloat(putValue.value));
      document.getElementById("result").innerHTML =
        "The converted value is " + temp + " kelvin";
    } else if (selectedItem2 == "rankine") {
      var temp = fahernhietToRankine(parseFloat(putValue.value));
      document.getElementById("result").innerHTML =
        "The converted value is " + temp + " rankine";
    } else {
      document.getElementById("result").innerHTML = "Select the Value";
    }
  } else if (selectedItem1 == "rankine") {
    console.log("check4");

    var selectedItem2 = toSelection.value;
    if (selectedItem2 == "celsius") {
      var temp = RankineToCelsius(parseFloat(putValue.value));
      document.getElementById("result").innerHTML =
        "The converted value is " + temp + " celsius";
    } else if (selectedItem2 == "fahrenheit") {
      var temp = rankinetoFahernhiet(parseFloat(putValue.value));
      document.getElementById("result").innerHTML =
        "The converted value is " + temp + " fahernhiet";
    } else if (selectedItem2 == "kelvin") {
      var temp = rankineToKelvin(parseFloat(putValue.value));
      document.getElementById("result").innerHTML =
        "The converted value is " + temp + " kelvin";
    } else {
      document.getElementById("result").innerHTML = "Select the Value";
    }
  } else {
    document.getElementById("result").innerHTML = "Select the Value1";
  }
}
