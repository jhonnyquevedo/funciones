/*script.js*/
/*funcion normal
function pintar(){
    ele.style.backgroundColor = 'yellow'
}

const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);*/

/*functión modificada*/
const ele = document.getElementById("ele1");

function pintar(element, color){
    element.style.backgroundColor = color;
}
pintar(ele, "green");

ele.addEventListener("click", function(){
    ele.style.backgroundColor = "yellow";
})