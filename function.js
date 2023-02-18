//for Triangle
function inputFieldNumbers(id1){
    const inputNumber = document.getElementById(id1);
    const inputNumberString = inputNumber.value ;
    const inputNumberValue = parseInt(inputNumberString);
   
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
    outputArea.innerText =triangleArea;
    
    
})
//For Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleWidthValue = inputFieldNumbers('rectangle-width');
    const rectangleLengthValue = inputFieldNumbers('rectangle-length');
    
    const rectangleArea =rectangleWidthValue * rectangleLengthValue;
      
    const outputArea = document.getElementById('rectangle-output');
    outputArea.innerText =rectangleArea;
    
})

// for parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const parallelogramBaseValue = inputFieldNumbers('parallelogram-base');
    const parallelogramHeightValue = inputFieldNumbers('parallelogram-height');
    
    const parallelogramArea =  parallelogramBaseValue * parallelogramHeightValue;
      
    const outputArea = document.getElementById('parallelogram-output');
    outputArea.innerText =parallelogramArea;
    
})

//for Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const distance1Value = inputFieldNumbers('distance1');
    const distance2Value = inputFieldNumbers('distance2');
    
    const rhombusArea = 0.5 * distance1Value * distance2Value;
      
    const outputArea = document.getElementById('rhombus-output');
    outputArea.innerText =rhombusArea;
    
})
//for Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const distance1Value = inputFieldNumbers('input1');
    const distance2Value = inputFieldNumbers('input2');
    
    const pentagonArea = 0.5 * distance1Value * distance2Value;
      
    const outputArea = document.getElementById('pentagon-output');
    outputArea.innerText =pentagonArea;
    
})

// for Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const input1Value = inputFieldNumbers('inputA');
    const input2Value = inputFieldNumbers('inputB');
    
    const ellipseArea = 3.1416 * input1Value * input2Value;
      
    const outputArea = document.getElementById('ellipse-output');
    outputArea.innerText =ellipseArea.toFixed(2);
    
})