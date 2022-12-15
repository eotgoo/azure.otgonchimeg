let haha = document.getElementById("addList");
let button = document.getElementById("btn");
let grouptodo = document.getElementById("grouptodo");

const add = (text) => {
    let lists = `
    <div class="listSection">
        <input type="text" id="addedTask" value="${text}">
        <button class="edit" onclick="edit(this)"><i class="fa-solid fa-pen" style="color: black;"></i></button>
        <button class="done" onclick="checked(this)"><i class="fa-solid fa-check" style="color: green;"></i></button>
        <button class="delete" onclick="ustgah(this)"><i class="fa-sharp fa-solid fa-trash" style="color: red;"></i></button>
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
        alert("Та жагсаалтанд утга оруулаагүй байна.");
    }else{
        
        grouptodo.innerHTML += add(text);
    }
};

//date
const date = new Date();
document.getElementById("date").innerHTML= date;



//delete
const ustgah = (e) => {
    const parent = e.parentNode.parentNode;
    const child = e.parentNode;
    parent.removeChild(child)
};



//check
const checked = (e) => {
    let checked = e.parentNode.parentNode.getElementsByTagName("input")[0];
    if (checked.classList.contains("line")) {
        checked.classList.remove("line");
    }
    else {
        checked.classList.add("line");
    }
};


//edit
const edit = (e) => {
    let edit = e.parentNode.children[0];

    e.children[0].classList.toggle('fa-save');
    e.children[0].classList.toggle('fa-edit');
    if (edit.hasAttribute('readonly')) {
        edit.removeAttribute('readonly');
    } else {
        edit.setAttribute('readonly','readonly');
    }
};



button.addEventListener('click' , taskAdd);
document.addEventListener('keyup',(e)=>{
    if(e.key === "Enter"){
        taskAdd();
    }
});