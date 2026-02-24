///////////////////////////////////////////////////////////////
// JavaScript DOM Practice: Event Bubbling & Delegation
// Save this file as: practice.js
// Open with an HTML file that includes this script.
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// ✅ PRACTICE 1: Event Bubbling
///////////////////////////////////////////////////////////////



const parent = document.getElementById("parent");
const child = document.getElementById("child");

if (parent && child) {
  parent.addEventListener("click", () => {
    console.log("Parent clicked");
  });

  child.addEventListener("click", () => {
    console.log("Child clicked");
  });
}

// 👉 Click button → Child clicked → Parent clicked



///////////////////////////////////////////////////////////////
// ✅ PRACTICE 2: stopPropagation()
///////////////////////////////////////////////////////////////



const box = document.getElementById("box");
const stopBtn = document.getElementById("stopBtn");

if (box && stopBtn) {
  box.addEventListener("click", () => {
    console.log("Box clicked");
  });

  stopBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Button clicked (no bubbling)");
  });
}

// 👉 Only button message appears



///////////////////////////////////////////////////////////////
// ✅ PRACTICE 3: stopImmediatePropagation()
///////////////////////////////////////////////////////////////


const multiBtn = document.getElementById("multiListener");

if (multiBtn) {
  multiBtn.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    console.log("First listener runs");
  });

  multiBtn.addEventListener("click", () => {
    console.log("Second listener will NOT run");
  });
}



///////////////////////////////////////////////////////////////
// ✅ PRACTICE 4: Event Delegation (Basic)
///////////////////////////////////////////////////////////////



const list = document.getElementById("list");

if (list) {
  list.addEventListener("click", (event) => {
    if (event.target.classList.contains("item")) {
      console.log("You clicked:", event.target.textContent);
    }
  });
}



///////////////////////////////////////////////////////////////
// ✅ PRACTICE 5: Delegation with Dynamic Elements
///////////////////////////////////////////////////////////////



const dynamicList = document.getElementById("dynamicList");
const addItemBtn = document.getElementById("addItem");

if (dynamicList && addItemBtn) {
  dynamicList.addEventListener("click", (event) => {
    if (event.target.matches(".dyn-item")) {
      console.log("Clicked:", event.target.textContent);
    }
  });

  let count = 2;

  addItemBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.className = "dyn-item";
    li.textContent = `Item ${count++}`;
    dynamicList.appendChild(li);
  });
}



///////////////////////////////////////////////////////////////
// ✅ PRACTICE 6: event.target vs event.currentTarget
///////////////////////////////////////////////////////////////


const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

if (outer && inner) {
  outer.addEventListener("click", (event) => {
    console.log("target:", event.target.id);
    console.log("currentTarget:", event.currentTarget.id);
  });
}

// 👉 Click inner button:
// target: inner
// currentTarget: outer



///////////////////////////////////////////////////////////////
// ✅ PRACTICE 7: Real-World Delegation (Todo List)
///////////////////////////////////////////////////////////////


const todoList = document.getElementById("todoList");

if (todoList) {
  todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
      const li = event.target.parentElement;
      li.remove();
      console.log("Task removed");
    }
  });
}



///////////////////////////////////////////////////////////////
// END OF PRACTICE FILE
///////////////////////////////////////////////////////////////