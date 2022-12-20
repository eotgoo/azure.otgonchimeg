let haha = document.getElementById("addList");
let button = document.getElementById("btn");
let grouptodo = document.getElementById("grouptodo");

// //date
// const date = new Date();
// document.getElementById("date").innerHTML= date;


const allTask = [
    { name: "JS", status: true, priority: "high" },
    { name: "HTML", status: false, priority: "low" },
    { name: "CSS", status: false, priority: "medium" },
  ];
  

const addTodo = () => {
    let text = haha.value;
    let pr = selectItem.value;
    const newTask = {
    name: text,
    status: false,
    priority: pr,
  };
    allTask.push(text);
    renderTodoApp();
};

button.addEventListener('click' , addTodo);
document.addEventListener('keyup',(e)=>{
    if(e.key === "Enter"){
        addTodo();
    }
});

const deleteTodo = (index) => {
    allTask.splice([index], 1);
    renderTodoApp();
};

const renderTodoApp = () => {
    
    grouptodo.innerHTML = "";

    for (let i = 0; i < allTask.length; i++) {
        const done = allTask[i].status ? "strikethrough" : "";
        const item = `   
                    <div class="listSection ${allTask[i].priority}">
                        <input type="text" class="text ${done}" id= "addedTask" readonly value="${allTask[i]}" />
                            <button class="edit"><i class="fas fa-pen"></i></button>
                            <button class="done" onclick="done(${i})"><i class="fas fa-check"></i></button>
                            <button class="delete" onclick="deleteTodo(${i})"><i class="fas fa-trash"></i></button>
                    </div>`;
        grouptodo.innerHTML += item;
      }
};




// const add = (text) => {
//     let lists = `
//     <div class="listSection">
//         <input type="text" id="addedTask" value="${text}">
//         <button class="edit" onclick="edit(this)"><i class="fa-solid fa-pen" style="color: black;"></i></button>
//         <button class="done" onclick="checked(this)"><i class="fa-solid fa-check" style="color: green;"></i></button>
//         <button class="delete" onclick="ustgah(this)"><i class="fa-sharp fa-solid fa-trash" style="color: red;"></i></button>
//     </div>`;

//     return lists;
//     let lists_section = document.createElement("div");
//     let lol = document.getElementById("addList").value;
//     lists_section.innerHTML = lists;
//     grouptodo.appendChild(lists_section);
//     lists_section.getElementsByTagName("input")[0].value = lol;
// }


// const taskAdd = () => {
//     let text = haha.value;
//     if(text === ""){
//         alert("Та жагсаалтанд утга оруулаагүй байна.");
//     }else{
        
//         grouptodo.innerHTML += add(text);
//     }
// };


// //delete
// const ustgah = (e) => {
//     const parent = e.parentNode.parentNode;
//     const child = e.parentNode;
//     parent.removeChild(child)
// };



//check
// const checked = (e) => {
//     let checked = e.parentNode.getElementsByTagName("input")[0];
//     if (checked.classList.contains("line")) {
//         checked.classList.remove("line");
//     }
//     else {
//         checked.classList.add("line");
//     }
// };


// //edit
// const edit = (e) => {
//     let edit = e.parentNode.children[0];

//     e.children[0].classList.toggle('fa-save');
//     e.children[0].classList.toggle('fa-edit');
//     if (edit.hasAttribute('readonly')) {
//         edit.removeAttribute('readonly');
//     } else {
//         edit.setAttribute('readonly','readonly');
//     }
// };



// button.addEventListener('click' , taskAdd);
// document.addEventListener('keyup',(e)=>{
//     if(e.key === "Enter"){
//         taskAdd();
//     }
// });