function translateHeading() {
  let h1Element = document.querySelector("h1");
  let h1SecondElement = document.querySelector("#city-of-pizza");
  h1Element.innerHTML = `Napoli da scoprire`;
  h1SecondElement.innerHTML = `La cittá della pizza`;
  h1ThirdElement.innerHTML = `Sua maestá il Vesuvio`;
}

let h1Element = document.querySelector("h1");
let h1SecondElement = document.querySelector("#city-of-pizza");
let h1ThirdElement = document.querySelector("#the-Vesuvius");

h1Element.onmouseover = function () {
  h1Element.innerHTML = `Napoli da scoprire`;
};
h1Element.onmouseout = function () {
  h1Element.innerHTML = `Discover Naples`;
};
h1SecondElement.onmouseover = function () {
  h1SecondElement.innerHTML = `La cittá della pizza`;
};
h1SecondElement.onmouseout = function () {
  h1SecondElement.innerHTML = `The city of pizza`;
};
h1ThirdElement.onmouseover = function () {
  h1ThirdElement.innerHTML = `Il Vesuvio`;
};
h1ThirdElement.onmouseout = function () {
  h1ThirdElement.innerHTML = `The Vesuvius`;
};

function showGallery() {
  let photoGallery = document.querySelector("#gallery-container");
  if (photoGallery.style.display === "none") {
    photoGallery.style.display = "block";
  } else {
    photoGallery.style.display = "none";
  }
}
