// var text1 = document.getElementById("text1");
// var btn = document.getElementById("text");

// function color() {
//     var x = Math.floor(Math.random() * 255);
//     var y = Math.floor(Math.random() * 255);
//     var z = Math.floor(Math.random() * 255);
//     var p = "rgb("+x+ ", " +z+")";
//     console.log(p);
//     text1.style.background.color=p;
//     text1.style.color=p;
// } 
// btn.addEventListener("click",color);

// var divEle = document.getElementById("text1");
// var btnEle = document.getElementById("text");

// function color() {
//     var x = Math.floor(Math.random() * 255);
//     var y = Math.floor(Math.random() * 255);
//     var z = Math.floor(Math.random() * 255);
//     var p = "rgb("+x+ ", "+y+ ", " +z+")";
//     console.log(p);
//     divEle.style.backgroundColor=p;
//     divEle.style.color=p;
// } 
// btnEle.addEventListener("click",color);


var count = document.getElementById("count");
var value = document.getElementById("value");

function number() {
    var x = Math.floor(Math.random() * 100);
    count.innerHTML = x;
}
value.addEventListener("click",number);