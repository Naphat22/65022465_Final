const DispTXT = document.getElementById("Res");

function Txtchanged(val){
  const TB = document.getElementById('NameTxt').value;
  console.log(TB);
  DispTXT.inertText = TB;


}