var b = document.querySelector("button.no");
b.addEventListener("click",change);
function change()
{
    var i = Math.floor(Math.random()*320)+1;
    var j = Math.floor(Math.random()*320)+1;
    b.style.left = i+"px";
    b.style.top = j+"px";
}