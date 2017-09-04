
/*map*/
/*
var arr = [1,2,3,4];

function __map(arr, func){
  var result = [];
  for(var i = 0; i < arr.length; i++){
    result.push(func(arr[i]));
  }
  return result;
}

function plusOne(v){
  return v+1;
}

var result = __map(arr, plusOne);
console.log("plusone :" , result);
*/

/*filter*/
/*
var arr = [11,222,33,44];

function __filter(arr, func){
  var result = [];
  for(var i = 0; i < arr.length; i++){
    if( func(arr[i]) == true){
      result.push(arr[i]);
    }
    
  }
  return result;
}


function isEven(v){
  return v%2==true;
}

function greater(v){
  return v>30;
}

var result = __filter(arr, isEven);
console.log("even :" , result);


var result = __filter(arr, greater);
console.log("greater :" , result);



var fruits = [    
  {"name":"apple", "count": 2},    
  {"name":"orange", "count": 5},    
  {"name":"pear", "count": 3},    
  {"name":"orange", "count": 16}
]; 


function isOrange(v){
  return v.name == 'orange';
}

var result = __filter(fruits, isOrange);
console.log("isOrange :" , result);

*/

/* reduce */

var arr = [1,2,3,4];

function __reduce(arr, func, init){//데이터,함수,초기값 받기
  
  for(var i = 0; i < arr.length; i++){
       init = func(init, arr[i]);
  }
  return init;
}
/*
var result = __reduce(arr, function(init, val){
  return init + val;
}, 0)
*/

var products = [
  {
    is_selected: true, // <— 장바구니에서 체크 박스 선택
    name: "반팔티",
    price: 10000, // <— 기본 가격
    sizes: [ // <—— 장바구니에 담은 동일 상품의 사이즈 별 수량과 가격
      { name: "L", quantity: 2, price: 0 },
      { name: "XL", quantity: 3, price: 0 },
      { name: "2XL", quantity: 2, price: 2000 }, // <—— 옵션의 추가 가격
    ]
  },
  {
    is_selected: true,
    name: "후드티",
    price: 21000,
    sizes: [
      { name: "L", quantity: 3, price: -1000 },
      { name: "2XL", quantity: 1, price: 2000 },
    ]
  },
  {
    is_selected: false,
    name: "맨투맨",
    price: 16000,
    sizes: [
      { name: "L", quantity: 4, price: 0 }
    ]
  }
];

//reduce로 price를 합친다
//안녕
function isPrice(value) {
  return value == product.price
}

var result = __reduce(arr, function(init, val){
  var arr = products.filter()
  return init + val;
}, 0)
