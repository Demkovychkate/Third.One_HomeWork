let btn1=document.querySelector('.btn-one');


function FirstTask(){
let number1 = prompt ('Введіть перше число ','2');
let number2 = prompt ('Введіть друге число ','2');

alert (number1 +'+'+ number2 +'='+ (+number1 + +number2));
alert (number1 +'-'+ number2 +'='+ (+number1 - +number2));
alert (number1 +'*'+ number2 +'='+ (+number1 * +number2));
alert (number1 +'/'+ number2 +'='+ (+number1 / +number2));

}

btn1.onclick= FirstTask;