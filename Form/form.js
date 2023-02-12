// put background styles using js    
var page=document.documentElement;
page.style.background="rgb(38, 156, 38)";
var form=document.getElementById("form");
form.style.background=" white";
var input=document.getElementsByClassName("input");
for(var elem=0;elem<input.length;elem++){
    input[elem].style.background="rgb(170, 170, 170)";
}
var btn=document.getElementById("btn");
 btn.style.background=" rgb(38, 156, 38)";

//  login button action
btn.onclick=function(){
var name=document.getElementById("username").value;
var password=document.getElementById("password").value;
localStorage.setItem("username",name);
if(name=="admin"&&password==123){
   document.write("<h1>Welcome back," + localStorage.getItem("username")+ "</h1>");
}
else{
    btn.style.background=" red";
    alert("not regited");
}
}