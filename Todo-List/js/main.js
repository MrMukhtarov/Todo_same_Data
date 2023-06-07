"use strict";

let TodoArr = [];

let input = document.getElementById("inp");
let ul = document.getElementById("ul");

function Add() {
  document.getElementById("rmv-all").style.display = "block";
  if (TodoArr.length == 6) {
    document.getElementById("add-btn").disabled = true;
  } else {
    if (!input.value) {
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
      if (TodoArr.includes(input.value)) {
        input.classList.add("is-invalid");
      } else {
        TodoArr.push(input.value);
      }
      input.value = "";
      document.getElementById("remove-all").disabled = false;
    }
  }
  Display();
}

function Remove(id) {
  TodoArr.splice(id, 1);
  document.getElementById("tst").style.display = "block";
  document.getElementById("add-btn").disabled = false;

  setTimeout(() => {
    document.getElementById("tst").style.display = "none";
  }, 3000);
  if (TodoArr.length == 0) {
    document.getElementById("remove-all").disabled = true;
  }
  Display();
}

function Display() {
  let listItem = "";

  for (let i = 0; i < TodoArr.length; i++) {
    listItem += ` <li class="list-group-item d-flex justify-content-between align-items-center mb-2">${TodoArr[i]} 
          <button onclick="Remove(${i})" type="button" class="btn btn-danger btn-sm">Remove</button>
          </li>
          `;
  }
  ul.innerHTML = listItem;
}

function RemoveAll() {
  TodoArr.splice(0, TodoArr.length);
  document.getElementById("remove-all").disabled = true;
  Display();
}
