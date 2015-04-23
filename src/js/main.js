var  $ = require('jquery'),
  math = require('mathjs');

AxArray = [],
  HArray = [],
  Y = 0,
  a = 5;

for(var i = 0; i<40; i++){
  var scope = {
    t : i,
    k : 2
  };
    val = math.eval('t * e ^ (-t * sqrt(k))', scope);
  HArray.push(val);
}
HArray = HArray.reverse();
console.log(HArray);

  function handleOrientation(event) {
    var padding = 50;
    var gamma = (parseInt(event.beta) * 5);
  AxArray.push(gamma);
    if(AxArray.length >= 40){
      AxArray = AxArray.splice(40,1);
    }
      for(var i = 0; i < AxArray.length; i++) {
        var result = HArray[i] * -AxArray[i];
        var offset = result * 5;
        document.querySelector('.content').style.marginTop = (padding + offset) +'px';
      }
  }
 window.addEventListener('deviceorientation', handleOrientation);