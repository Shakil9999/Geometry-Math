function calculateArea() {
  const tringlebaseinput = document.getElementById("traingle-base").value;
  const base = parseFloat(tringlebaseinput);

  const tringleHeight = document.getElementById("traingle-height").value;
  const height = parseFloat(tringleHeight);

  const taringleArea = 0.5 * base * height;

  const taringleAreaSpan = document.getElementById("tringle-area");
  taringleAreaSpan.innerText = taringleArea;

}

function calculateRactangleArea(){
    
//                       Rectangle Area Calculate

const  ractangleLength = document.getElementById('ractangler-length').value;
const length=parseFloat(ractangleLength);

const  ractanglewidth = document.getElementById('rectangler-width').value;
const width=parseFloat(ractanglewidth);

const ractangleArea =length*width

const ractangleAreaSpan=document.getElementById('ractangle-area');
ractangleAreaSpan.innerText=ractangleArea;

}


