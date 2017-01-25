function my_max(arr){
    var max = arr[0,2,4,6,8];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
    
};



var cars = [2,4,6,8,10];

 for (i = 1; i < cars.length; i++){
  	console.log(cars);
 }

 function computeSomething(num) {
  if (Math.random() > 0.5) {
    return 2;
  } else {
    return 'hello';
  }
}

var x = computeSomething(0);
console.log(x);

var square = function(x) {
	return x * x;
}

var x = 7;
console.log(x + square(x));

