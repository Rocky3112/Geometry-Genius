const button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    window.location.href = "questionAnswer.html";
  });


//for Triangle
function inputFieldNumbers(id1){
    const inputNumber = document.getElementById(id1);
    const inputNumberString = inputNumber.value ;
    const inputNumberValue = parseFloat(inputNumberString).toFixed(2);
   
    inputNumber.value ='';
    
   
    if(isNaN(inputNumberValue) || inputNumberValue<0 ){
      return  alert('please inter number');
    }
    else if(inputNumberValue == null){
        return  alert('please inter input'); 
    }
    
    return inputNumberValue;
}
document.getElementById('btn-triangle').addEventListener('click', function(){
   
    const triangleBaseValue = inputFieldNumbers('triangle-base');
    const triangleHeightValue = inputFieldNumbers('triangle-height');
    const triangleArea = 0.5 * triangleBaseValue * triangleHeightValue;
      
    const outputArea = document.getElementById('triangle-output');
    outputArea.innerText =triangleArea.toFixed(2);

    
    
})
//For Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleWidthValue = inputFieldNumbers('rectangle-width');
    const rectangleLengthValue = inputFieldNumbers('rectangle-length');
    
    const rectangleArea =rectangleWidthValue * rectangleLengthValue;
      
    const outputArea = document.getElementById('rectangle-output');
    outputArea.innerText =rectangleArea.toFixed(2);
    
})

// for parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const parallelogramBaseValue = inputFieldNumbers('parallelogram-base');
    const parallelogramHeightValue = inputFieldNumbers('parallelogram-height');
    
    const parallelogramArea =  parallelogramBaseValue * parallelogramHeightValue;
      
    const outputArea = document.getElementById('parallelogram-output');
    outputArea.innerText =parallelogramArea.toFixed(2);
    
})

//for Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const distance1Value = inputFieldNumbers('distance1');
    const distance2Value = inputFieldNumbers('distance2');
    
    const rhombusArea = 0.5 * distance1Value * distance2Value;
      
    const outputArea = document.getElementById('rhombus-output');
    outputArea.innerText =rhombusArea.toFixed(2);
    
})
//for Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const distance1Value = inputFieldNumbers('input1');
    const distance2Value = inputFieldNumbers('input2');
    
    const pentagonArea = 0.5 * distance1Value * distance2Value;
      
    const outputArea = document.getElementById('pentagon-output');
    outputArea.innerText =pentagonArea.toFixed(2);
    
})

// for Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const input1Value = inputFieldNumbers('inputA');
    const input2Value = inputFieldNumbers('inputB');
    
    const ellipseArea = 3.1416 * input1Value * input2Value;
      
    const outputArea = document.getElementById('ellipse-output');
    outputArea.innerText =ellipseArea.toFixed(2);
    
})

//for random background color

var element1 = document.getElementById('myDiv1');

element1.addEventListener("mouseover", function() {
  var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
  element1.style.backgroundColor = "#" + randomColor1;
});
var element2 = document.getElementById('myDiv2');

element2.addEventListener("mouseover", function() {
  var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
  element2.style.backgroundColor = "#" + randomColor2;
});
var element3 = document.getElementById('myDiv3');

element3.addEventListener("mouseover", function() {
  var randomColor3 = Math.floor(Math.random()*16777215).toString(16);
  element3.style.backgroundColor = "#" + randomColor3;
});
var element4 = document.getElementById('myDiv4');

element4.addEventListener("mouseover", function() {
  var randomColor4 = Math.floor(Math.random()*16777215).toString(16);
  element4.style.backgroundColor = "#" + randomColor4;
});
var element5 = document.getElementById('myDiv5');

element5.addEventListener("mouseover", function() {
  var randomColor5 = Math.floor(Math.random()*16777215).toString(16);
  element5.style.backgroundColor = "#" + randomColor5;
});
var element6 = document.getElementById('myDiv6');

element6.addEventListener("mouseover", function() {
  var randomColor6 = Math.floor(Math.random()*16777215).toString(16);
  element6.style.backgroundColor = "#" + randomColor6;
});