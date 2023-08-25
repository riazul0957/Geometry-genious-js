function calculateTiangleArea(){
    // get triangle base
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);


    // get triangle value
    const heightField = document.getElementById('triangle-height');
    const heightValueText =heightField.value;
    const height =parseFloat(heightValueText);
    console.log(height);


    const area = 0.5 * base * height;
    console.log(area);


    // show triangle area
    const areaSpan =document.getElementById('triangle-area');
    areaSpan.innerText=area;
}
// get rectangle width
function calculateRectangleArea(){
const widthField = document.getElementById('ractangle-width');
const widthValueText = widthField.value;
const width =parseFloat(widthValueText);
console.log(width);


// get rectangle length
const lengthField =document.getElementById('rectangle-length');
const lengthValueText =lengthField.value;
const length =parseFloat(lengthValueText);
console.log(length);


// calculate area
const area =width * length;

// show rectangle area 
const rectangleAreaSpan =document.getElementById('rectangle-area');
rectangleAreaSpan.innerText=area;
}