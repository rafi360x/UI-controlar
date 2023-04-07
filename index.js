// define all matirial

let form = document.querySelector("#submit");
let form_value = document.querySelector("#fname");
let clear_btn = document.querySelector("#btn");
let saveChange = document.querySelector(".ul");
let filter = document.querySelector("#filter");
let last_value = document.querySelector("#lname");

// addEvent lecener
form.addEventListener("click", Test)
saveChange.addEventListener("click", Test2);
clear_btn.addEventListener("click", Test3);
filter.addEventListener("mouseup", Test4)
last_value.addEventListener("keyup", test5);
document.addEventListener("DOMContentLoaded", load);



// event function 

function Test(e) {
    e.preventDefault();
    if (form_value.value == 0) {
        alert("add a value");
    } else {
        let create_li = document.createElement("li");
        let create_a = document.createElement("a");
        create_a.setAttribute("href", "#")
        create_a.appendChild(document.createTextNode("x"));
        create_li.appendChild(document.createTextNode(form_value.value + ""));
        create_li.appendChild(create_a);
        saveChange.appendChild(create_li);
        createlocalstore(form_value.value);  
        form_value.value = "";


    }

}
function Test2(e) {
    if (e.target.hasAttribute("href")) {
        if (confirm("Are you sure")
        ) {
            let store = e.target;
            let value = store.parentElement;
            value.remove();
            removeLocalstore(value);
        }
    } else {
        console.log(e.target);
    }


    //e.target.remove();
}

function Test3() {
    saveChange.innerHTML = "";
}
function Test4() {
     
    let value_stor = document.querySelectorAll(".ul li");
    let [...value1] = value_stor;
    console.log(value1);


}
function test5(e) {
    let text = e.target.value.toLowerCase();
    let value_stor = document.querySelectorAll(".ul li");
    value_stor.forEach(task => {
        let store = task.firstChild.textContent;
        if (store.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    })


}
function createlocalstore(task){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
         
    }
     tasks.push(task);
     localStorage.setItem("tasks", JSON.stringify(tasks));
}
function load(){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
         
    }  
    tasks.forEach(task =>{
        let create_li = document.createElement("li");
        let create_a = document.createElement("a");
        create_a.setAttribute("href", "#")
        create_a.appendChild(document.createTextNode("x"));
        create_li.appendChild(document.createTextNode(task + ""));
        create_li.appendChild(create_a);
        saveChange.appendChild(create_li);
    })
}
function removeLocalstore(e){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let li = e;
    li.removeChild(li.lastChild); // <a>x</a>'

    tasks.forEach((task, index) =>{
        if(li.textContent.trim() === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    
}