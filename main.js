let color="gray"
let density=16;
const container=document.getElementById("grid");
        
document.getElementById("select").onclick=function(){
density=parseInt(document.getElementById("density").value);
    if(density<16||density>100){
        alert("permissible range-[16;100]");
    }else{
        buildGrid();
    }     
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function buildGrid(){
    removeAllChildNodes(container);
    container.style.display="grid"
    container.style.gridTemplateRows=`repeat(${density},1fr)`;
    container.style.gridTemplateColumns=`repeat(${density},1fr)`;
    for(let i=0;i<density*density;i++){
        const div=document.createElement("div"); 
        container.appendChild(div);
        div.addEventListener("mouseover", e => {
                if(e.buttons===1){
                    div.style.backgroundColor = color === "random" ? randomColor() : color;
                }
            }
        );
    }
}
        
function randomColor(){
    const x=Math.floor(Math.random()*256);
    const y=Math.floor(Math.random()*256);
    const z=Math.floor(Math.random()*256);
    const randomColor="rgb("+x+","+y+","+z+")";
    return randomColor;
}
        
function changeColor(newColor){
    color=newColor;
}
                
function resetColors(){
    const nodes=document.getElementById("grid").childNodes;
    for(let i=0;i<density*density;i++){
        nodes[i].style.background = "white";
    }    
}

buildGrid();