//                       traingle Area Calculate

function calculateArea() {
  const tringlebaseinput = document.getElementById("traingle-base").value;
  const base = parseFloat(tringlebaseinput);

  const tringleHeight = document.getElementById("traingle-height").value;
  const height = parseFloat(tringleHeight);

  const taringleArea = 0.5 * base * height;

  const taringleAreaSpan = document.getElementById("tringle-area");
  taringleAreaSpan.innerText = taringleArea;
}

//                       Rectangle Area Calculate

function calculateRactangleArea() {
  const ractangleLength = document.getElementById("ractangler-length").value;
  const length = parseFloat(ractangleLength);

  const ractanglewidth = document.getElementById("rectangler-width").value;
  const width = parseFloat(ractanglewidth);

  const ractangleArea = length * width;

  const ractangleAreaSpan = document.getElementById("ractangle-area");
  ractangleAreaSpan.innerText = ractangleArea;
}

//                       Rectangle Area parallelogram

function calculateParallelogramArea() {
  const parallelogramBase = document.getElementById("parallelogram-base").value;
  const base = parseFloat(parallelogramBase);

  const parallelogramHeight = document.getElementById(
    "parallelogram-height"
  ).value;
  const height = parseFloat(parallelogramHeight);

  const area = base * height;

  const parallelogramArea = document.getElementById("parallelogram-area");
  parallelogramArea.innerText = area;
}


//                     rhombus Area parallelogram

function calculateRhombusArea(){

const d1=getInputFromInputField('rhombus-d1');
const d2 =getInputFromInputField('rhombus-d2')
const area=0.5*d1*d2

areaCalculator('rhombusArea-span',area)

}

//                     rhombus Area parallelogram

function calculatePentagonArea(){
  const p= getInputFromInputField('pentagon-p')
  console.log(p)
  const b= getInputFromInputField('pentagon-b')
  const area= 0.5*p*b
  areaCalculator('pentagonArea-span', area)

}



//                     Ellipse Area parallelogram

function calculateEllipseArea(){
  const a=getInputFromInputField('ellipse-a')
  const b=getInputFromInputField('ellipse-b')
  const math = Math;
  const area=math.PI*a*b
  areaCalculator('ellipsearea-span',area)
}


//              common function


function getInputFromInputField(inputField){
  const input =document.getElementById(inputField)
  const inputValue =input.value;
  return parseFloat(inputValue)
}

function areaCalculator(elementId , value){
  const element=document.getElementById(elementId);
  element.innerText=value

}



