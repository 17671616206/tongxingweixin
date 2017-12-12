$(function(){
    $("#footer").load("../public/tabs.html");
});

var id=localStorage.getItem("id");
if(id){
    window.location.href='';
}