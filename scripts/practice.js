//js vs jquery
//select an html element and hide it
//ID
document.getElementById("txtEmail").style.
display="none";

$("#txtPassword").hide();

//TagName
for(let i=0; i<9; i++){
    document.getElementsByTagName("label")[i].style.display="none";
}
$("label").hide();

//className
document.getElementsByClassName("menu")[0].style.display="none";
$(".menu a:first").hide();

$("#btnAdd").on('click',function(){
    console.log()
})

$("").click(function(){
    $("p").hide();
  });


  function example(){
    $(".form").hide();
  }