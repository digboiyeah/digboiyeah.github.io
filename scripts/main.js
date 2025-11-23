const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/MWKA.PNG") {
    myImage.setAttribute("src", "images/MWKA2.PNG");
  } else {
    myImage.setAttribute("src", "images/MWKA.PNG");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Please enter name");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `this is, ${myName}, website`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `You are cool, ${storedName}`;
}

myButton.addEventListener("click", () =>{
    setUserName();

})
