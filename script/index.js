const form = document.querySelector("form");
const ul = document.querySelector("ul");
const input = document.querySelector("input");
let liTemplate = document.querySelector("li"); 


liTemplate.remove();

form.onsubmit = function(event) {
    event.preventDefault(); 
    
    const value = input.value.trim(); 
    
    if (value === "") {
        return; 
    }
    
    const newLi = liTemplate.cloneNode(true);
    newLi.querySelector("span").textContent = value; 
    ul.appendChild(newLi); 
    
    input.value = ""; 
    
    newLi.querySelector(".delete").addEventListener("click", function() {
        if (confirm("Deseja deletar esse item?")) {
            newLi.remove(); 
        }
    });
    
 
};
