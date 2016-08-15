  var listOutput =[];
  // var sortList = list.upperCase(listOuput);


$(document).ready(function(){


  $("form").submit(function(event){
    if ($("#listInput").val()) {
      listOutput.push($("#listInput").val());
    }
    $("#listInput").val("");
      // alert($("input").val());
      event.preventDefault();
    });
  $("#showBtn").click(function(){
    $("ul").text("");
    var upperCaseList = listOutput.map(function(element) {
      return element.toUpperCase();
    });
    debugger;
    var sortedList = upperCaseList.sort();
    sortedList.forEach(function(textOutput) {
      $("ul").append("<li>" + textOutput + "</li>");
    });
  });



});
