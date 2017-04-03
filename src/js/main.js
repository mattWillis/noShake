// var  $ = require('jquery'),
//   math = require('mathjs');

// AxArray = [],
//   HArray = [],
//   Y = 0,
//   a = 5;

// for(var i = 0; i<40; i++){
//   var scope = {
//     t : i,
//     k : 2
//   };
//     val = math.eval('t * e ^ (-t * sqrt(k))', scope);
//   HArray.push(val);
// }
// HArray = HArray.reverse();
// console.log(HArray);

//   function handleOrientation(event) {
//     var padding = 50;
//     var gamma = (parseInt(event.beta) * 5);
//   AxArray.push(gamma);
//     if(AxArray.length >= 40){
//       AxArray = AxArray.splice(40,1);
//     }
//       for(var i = 0; i < AxArray.length; i++) {
//         var result = HArray[i] * -AxArray[i];
//         var offset = result * 5;
//         document.querySelector('.content').style.marginTop = (padding + offset) +'px';
//       }
//   }
//  window.addEventListener('deviceorientation', handleOrientation);


var first = 1;

var wrapper = document.querySelector('.wrapper');
var content = document.querySelector('.content');

var maxX = wrapper.clientWidth  - content.clientWidth;
var maxY = wrapper.clientHeight - content.clientHeight;


function handleMotion(e) {
  // if(first <= 10){
  //   console.log(e.beta);
  // };
  // first++;
    var x = event.beta;  // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};
  x += 90;
  y += 90;
  content.style.top  = (maxX*x/180 - 10) + "px";
  content.style.left = (maxY*y/180 - 10) + "px";
}

window.addEventListener('deviceorientation', handleMotion);


// var ball   = document.querySelector('.ball');
// var garden = document.querySelector('.garden');
// var output = document.querySelector('.output');

// var maxX = garden.clientWidth  - ball.clientWidth;
// var maxY = garden.clientHeight - ball.clientHeight;

// function handleOrientation(event) {
//   var x = event.beta;  // In degree in the range [-180,180]
//   var y = event.gamma; // In degree in the range [-90,90]

//   output.innerHTML  = "beta : " + x + "\n";
//   output.innerHTML += "gamma: " + y + "\n";

//   // Because we don't want to have the device upside down
//   // We constrain the x value to the range [-90,90]
//   if (x >  90) { x =  90};
//   if (x < -90) { x = -90};

//   // To make computation easier we shift the range of
//   // x and y to [0,180]
//   x += 90;
//   y += 90;

//   // 10 is half the size of the ball
//   // It center the positioning point to the center of the ball
//   ball.style.top  = (maxX*x/180 - 10) + "px";
//   ball.style.left = (maxY*y/180 - 10) + "px";
// }

// window.addEventListener('deviceorientation', handleOrientation);