var year;

var isLeap = function(year){
  if((year%4==0)&& (year%100!==0) || (year%400==0)){
    return true;
  }
  // else if(year%400==0){
  //   return true;
  // }
  // else if(year%100!==0){
  //   return false;
  // }
  return false;
};

$(function(){
 $("form").submit(function(event){
   event.preventDefault();
   year = parseInt($("input#yearInput").val());
   // alert(year);
   var result = isLeap(year);
   $("#year").text(year);
   if(!result){
     $("#not").text("not");
   }else {
     $("#not").text("")
   }
   $("div.output").show();
   // alert(isLeap(year));
 });

});
