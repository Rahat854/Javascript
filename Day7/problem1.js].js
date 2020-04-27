cd var printOneToTen = function(){
  for( var i = 0; i < 10; i++){
    console.log(i+1);
  }
};

var printOneToTen = () => {
  for( var i = 0; i < 10; i++){
    console.log(i+1);
  }
};


var sumTwoNumber = (num1, num2) => num1 + num2;//ARROW FUCTION
function sumTwoNumber1(num1, num2){
  return num1 + num2;
}//normal function

console.log(sumTwoNumber(1, 6));