var list=document.getElementById("list_of_task")
var text=document.getElementById("input_text")
var add_b=document.getElementById("submit_button")
add_b.addEventListener("click",()=>{
    var data=text.value;
    const add=document.createElement("li");
    add.textContent=data;
    list.appendChild(add);
    text.value="";
    var del=document.createElement("button");
    del.innerText="X";
    del.addEventListener("click",()=>{
        add.remove();
    })
    add.appendChild(del);

})