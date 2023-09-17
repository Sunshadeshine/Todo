$(document).ready(function(){

     $("#board").addClass("hghlght");
     $("#task").removeClass("hghlght");

let b = $('.boards');
var Background = {
                Work: "#9CECFE",
                Personal: "#FFF970",
                Cleaning: "#61E294",
                Others:"#F2CEE6"
                };
let bLen =b.length;
//  alert(bLen);
 for (let i = 0; i < bLen; i++){
    var bg=b[i].innerText.trim();
//    alert(b[i].text);
    $(b[i]).css('background-color',Background[bg]);
  }






});
$("#task").click(function(){
  $("#board").removeClass("hghlght");
  $("#task").addClass("hghlght");
})