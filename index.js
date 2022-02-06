const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAll = document.querySelector(".clear");


showTasks();
addBtn.onclick = () => {
    let userData = inputBox.value;
    let getlocalstorage = localStorage.getItem("New Todo");

    if(getlocalstorage == null) {
        listArr = [];
    }else {
        listArr = JSON.parse(getlocalstorage);
    }

    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

//adding todo
function showTasks() {
    let getlocalstorage = localStorage.getItem("New Todo");

    if(getlocalstorage == null) {
        listArr = [];
    }else {
        listArr = JSON.parse(getlocalstorage);
    }
    
    //Adding number of todos
    const count = document.querySelector(".count");
    count.textContent = listArr.length;

    let newListTag = '';
    listArr.forEach((element,index) => {
        newListTag += `<li> ${element} <button onclick= "deleteTask(${index})"; >DEL</button></li>`;
    });
    todoList.innerHTML = newListTag;
    inputBox.value = "";
}  

//delete todo
function deleteTask(index) {
    let getlocalstorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getlocalstorage);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}
//clear
deleteAll.onclick =()=> {
    listArr=[];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}
