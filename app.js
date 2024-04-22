// write code here
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

let radius = prompt("โปรดใส่ค่ารัศมีของวงกลม:");
radius = parseFloat(radius);


if (isNaN(radius) || radius <= 0) {
  console.log("โปรดใส่ค่ารัศมีที่ถูกต้อง (ตัวเลขบวก)");
} else {
  
  let circumference = calculateCircumference(radius);
  console.log("ความยาวเส้นรอบวงของวงกลม:", circumference);
}
