//for Triangle
document.getElementById('btn-triangle').addEventListener('click', function(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseString = triangleBase.value ;
    const triangleBaseValue = parseInt(triangleBaseString);
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightString = triangleHeight.value ;
    triangleBase.value ='';
    triangleHeight.value = '';
    const triangleHeightValue = parseInt(triangleHeightString);
    if(isNaN(triangleBaseValue) || isNaN(triangleHeightValue)){
        alert('please inter number')
    }
    else if(triangleBaseValue<0 || triangleHeightValue<0)
    {
        alert('please inter positive number')
    }
    const triangleArea = 0.5 * triangleBaseValue * triangleHeightValue;
      
    const outputArea = document.getElementById('output');
    const show = outputArea.innerText =triangleArea;
    
})