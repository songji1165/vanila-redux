import { createStore } from "redux";

const handleClickAdd = document.getElementById("addList");
const inputList = document.getElementById("inputText");
const intoList = document.getElementById("todoList");

const todoList = [];

const innerToDo = () => {
  let liTpl = "";
  todoList.forEach(data => {
    liTpl += `<li>${data}</li>`;
  });
  intoList.innerHTML = liTpl;
};

const addToDo = () => {
  todoList.push(inputList.value);
  inputList.value = "";
  innerToDo();
}

const enterInput = (e) => {
  if(e.keyCode === 13){
    handleClickAdd.click();
  }
}

handleClickAdd.addEventListener("click",addToDo);
inputList.addEventListener("keyup",enterInput);