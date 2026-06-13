let greetings=["Good Morning","Good Afternoon","Good Evening","Good Night"];
let num=0;
function greet_afternoon()
{
    let text=document.getElementById("greet");
    text.innerText=greetings[num];
    num+=1;
    if(num>3){num=0;}
}
function turn_on(){
    let light=document.getElementById("on");
    light.src="img1.jpeg";
}
function turn_off(){
    let light=document.getElementById("on");
    light.src="img.jpeg";
}
function Change_color()
{
    let color=document.getElementById("cap")
    color.style.backgroundColor="skyblue";
    let text1=document.getElementById("cap")
    color.style.color="purple";
}