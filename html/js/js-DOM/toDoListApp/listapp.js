let haha = document.getElementById("addList");
let button = document.getElementById("btn");
let grouptodo = document.getElementById("grouptodo");

const add = (text) => {
    let lists = `
    <div class="listSection">
        <input type="text" id="addedTask" value="${text}">
        <i class="fa-solid fa-pen" style="color: black;"></i>
        <i class="fa-solid fa-check" style="color: green;"></i>
        <i class="fa-sharp fa-solid fa-trash" style="color: red;"></i>
    </div>`;

    return lists;
    // let lists_section = document.createElement("div");
    // let lol = document.getElementById("addList").value;
    // lists_section.innerHTML = lists;
    // grouptodo.appendChild(lists_section);
    // lists_section.getElementsByTagName("input")[0].value = lol;
}

const taskAdd = () => {
    let text = haha.value;
    if(text === ""){
        alert("ta utga oruulagui baina");
    }else{

        grouptodo.innerHTML += add(text);
    }
}

button.addEventListener('click' , taskAdd);
document.addEventListener('keyup',(e)=>{
    if(e.key === "Enter"){
        taskAdd();
    }
});