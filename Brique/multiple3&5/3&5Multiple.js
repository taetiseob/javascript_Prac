//1000미만의 자연수에서 3,5의 배수의 총합을 구하라
function multiples(max){
  var result = 0;

  for(var i = 0; i < max; i++){
      //3과5의 배수 거르기
	  if(i%3 == 0 || i%5 == 0){
		  result += i;
	  }
  }
  return result;
}
console.log(multiples(1000));
