//for Triangle
document.getElementById('btn-triangle').addEventListener('click', function(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseString = triangleBase.value ;
    const triangleBaseValue = parseInt(triangleBaseString);
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightString = triangleHeight.value ;
    const triangleHeightValue = parseInt(triangleHeightString);
    
    triangleBase.value ='';
    triangleHeight.value = '';
    if(isNaN(triangleBaseValue) || isNaN(triangleHeightValue)){
        alert('please inter number')
    }
    else if(triangleBaseValue<0 || triangleHeightValue<0)
    {
        alert('please inter positive number')
    }
    const triangleArea = 0.5 * triangleBaseValue * triangleHeightValue;
      
    const outputArea = document.getElementById('triangle-output');
    const show = outputArea.innerText =triangleArea;
    
})
//For Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthString = rectangleWidth.value ;
    const rectangleWidthValue = parseInt(rectangleWidthString);
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthString = rectangleLength.value ;
    rectangleWidth.value ='';
    rectangleLength.value = '';
    const rectangleLengthValue = parseInt(rectangleLengthString);
    if(isNaN(rectangleWidthValue) || isNaN(rectangleLengthValue)){
        alert('please inter number')
    }
    else if(rectangleWidthValue<0 || rectangleLengthValue<0)
    {
        alert('please inter positive number')
    }
    const rectangleArea =rectangleWidthValue * rectangleLengthValue;
      
    const outputArea = document.getElementById('rectangle-output');
    const show = outputArea.innerText =rectangleArea;
    
})

// for parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const parallelogramBase = document.getElementById('parallelogram-base');
    const parallelogramBaseString = parallelogramBase.value ;
    const parallelogramBaseValue = parseInt(parallelogramBaseString);
    const parallelogramHeight = document.getElementById('parallelogram-height');
    const parallelogramHeightString = parallelogramHeight.value ;
    const parallelogramHeightValue = parseInt(parallelogramHeightString);
    
    parallelogramBase.value ='';
    parallelogramHeight.value = '';
    if(isNaN(parallelogramBaseValue) || isNaN(parallelogramHeightValue)){
        alert('please inter number')
    }
    else if(parallelogramBaseValue<0 || parallelogramHeightValue<0)
    {
        alert('please inter positive number')
    }
    const parallelogramArea =  parallelogramBaseValue * parallelogramHeightValue;
      
    const outputArea = document.getElementById('parallelogram-output');
    const show = outputArea.innerText =parallelogramArea;
    
})