var myHeading = document.querySelector("h1");
myHeading.innerHTML = "Hello ! Welcome to PiaoYang !";

var myButton = document.querySelector("button");

function setUserName() {
    var myName = prompt("输入你的名字！");
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Welcome " + myName + " to Piaoyang!";

}

if(!localStorage.getItem("name")){
    setUserName();
}
else{
    var storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Welcome " + storedName + " to Piaoyang!";
}
myButton.onclick = function(){
    setUserName();
}

var myImage = document.querySelector("img");
myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");

    if (mySrc === "images/icon.png") {
        myImage.setAttribute("src", "images/icon2.png");
    }
    else {
        myImage.setAttribute("src", "images/icon.png");
    }
}

