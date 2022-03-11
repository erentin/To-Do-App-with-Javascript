window.onload = function () {
  const form = document.querySelector(".taskform");
  const lowerTask = document.getElementById("lowerTask");
  let inputText = document.getElementById("task-form-input-text");
  let dele = document.getElementsByClassName("deleteBtn");
  var deleteAll = document.getElementsByClassName("delete-all");
  var deleting = document.querySelectorAll(".tasksSec");
  form.addEventListener("submit", onSubmit);
  lowerTask.addEventListener("click", onClick);
};

function onSubmit() {
  let inputText = document.getElementById("task-form-input-text").value;
  // create new row
  let new_row = document.createElement("section");
  new_row.className = "tasksSec";
  lowerTask.appendChild(new_row);
  // create input
  let new_input = document.createElement("input");
  new_input.readOnly = true;
  new_input.type = "text";
  new_input.className = "tasks";
  new_input.value = inputText;
  // create buttons
  let new_edit_button = document.createElement("button");
  let new_delete_button = document.createElement("button");
  new_edit_button.type = "submit";
  new_delete_button.type = "submit";
  new_edit_button.className = "editBtn";
  new_delete_button.className = "deleteBtn";
  new_edit_button.innerHTML = "Edit";
  new_delete_button.innerHTML = "Delete";
  // new row,buttons appendchild to new input
  new_row.appendChild(new_input);
  new_row.appendChild(new_edit_button);
  new_row.appendChild(new_delete_button);
  event.preventDefault();
}

function onClick(e) {
  if (e.target.className == "deleteBtn") {
    let removed = e.target.parentElement;
    removed.remove();
  }
  if (e.target.className == "editBtn") {
    let edited = e.target.previousSibling;
    if (e.target.className == "editBtn" && edited.readOnly == false) {
      edited.readOnly = true;
      console.log("safıoapsf");
      return;
    }
    edited.readOnly = false;
    console.log(edited);
    return;
  }
  if (e.target.className == "delete-all") {
    deleteAll.forEch(function () {
      deleting.remove();
    });
  }
}
