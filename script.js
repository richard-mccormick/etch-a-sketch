console.log("IT'S WORKING!!!!")

const container = document.querySelector("#container");
//const row = document.createElement("div");
//const block = document.createElement("div");
//row.classList.add("row");
let gridSize = 16;


function fillRow(divName){
    for(let i = 0; i< gridSize; i++){
        const block = document.createElement("div");
        block.classList.add("block");
        block.setAttribute("id", "block");
        block.style.width = "6.25%";
        block.addEventListener("mouseenter", () => {
            block.classList.add("colored");
        });
        divName.appendChild(block);
    }
}


function makeGrid(containerName){
    for(let i = 0; i< gridSize; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        containerName.appendChild(row);
        fillRow(row);
    }
}


makeGrid(container);


