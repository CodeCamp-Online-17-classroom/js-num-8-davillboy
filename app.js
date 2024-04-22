// write code here
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

let radius;
let isValidInput = false;

while (!isValidInput) {
  let input = prompt("โปรดใส่ค่ารัศมีของวงกลม (ต้องเป็นตัวเลขเท่านั้น):");
  
  if (input === null) {
    // ถ้าผู้ใช้กด "Cancel" หรือปิด dialog ให้ออกจาก loop
    break;
  }

  radius = parseFloat(input);

  if (!isNaN(radius) && radius > 0) {
    isValidInput = true;
  } else {
    alert("โปรดใส่ค่ารัศมีที่ถูกต้อง (ตัวเลขบวก)");
  }
}

if (isValidInput) {
  let circumference = calculateCircumference(radius);
  alert("ความยาวเส้นรอบวงของวงกลม: " + circumference.toFixed(2));
  console.log("ความยาวเส้นรอบวงของวงกลม: " + circumference.toFixed(2));
}
