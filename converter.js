function convertToCm() {
  const inch = document.getElementById("inchInput").value;
  const cm = (inch * 2.54).toFixed(2);
  document.getElementById("result").innerText = `Equal to ${cm} cm`;
}
