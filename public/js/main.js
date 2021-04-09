const deleteBtn = document.querySelectorAll(".del");
const todoItem = document.querySelectorAll(".todoItem span");
const todoComplete = document.querySelectorAll(".todoItem span.completed");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteTodo);
});
Array.from(todoItem).forEach((el) => {
  el.addEventListener("click", markComplete);
});
Array.from(todoComplete).forEach((el) => {
  el.addEventListener("click", undo);
});

async function deleteTodo() {
  /* This represents the delete text we click on
    Gets the todo text from the span in the index.ejs file by going from the
    parentNode (li) and the childNode (span).
    Then grab the first index of the span (the space counts as zero so the
    text is index 1) */
  const todoText = this.parentNode.childNodes[1].innerText;
  //fetch to database //
  try {
    const response = await fetch("deleteTodo", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        rainbowUnicorn: todoText,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete() {
  const todoText = this.parentNode.childNodes[1].innerText;
  //fetch to database //
  try {
    const response = await fetch("markComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        rainbowUnicorn: todoText,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function undo() {
  const todoText = this.parentNode.childNodes[1].innerText;
  //fetch to database //
  try {
    const response = await fetch("undo", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        rainbowUnicorn: todoText,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
