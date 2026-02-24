# JavaScript Events

When JavaScript is used in HTML pages, it can react to events. This allows you to execute code the moment an action is detected by the browser.

## Common HTML Events

| Event | Description |
| :--- | :--- |
| **onchange** | An HTML element has been changed |
| **onclick** | The user clicks an HTML element |
| **onmouseover** | The user moves the mouse over an HTML element |
| **onmouseout** | The user moves the mouse away from an HTML element |
| **onkeydown** | The user pushes a keyboard key |
| **onload** | The browser has finished loading the page |

---

## Best Practice: `addEventListener()`

Using the `addEventListener()` method is highly recommended because it keeps your HTML and JavaScript logic separated.

### Example

```html
<button id="myBtn">Click me</button>
<p id="demo"></p>

<script>
  const btn = document.getElementById("myBtn");

  // Add EventListener to btn
  btn.addEventListener("click", function () {
    document.getElementById("demo").innerHTML = Date();
  });
</script>
```
# JavaScript Mouse Events

JavaScript provides a variety of mouse events to capture user interactions with a pointing device. This allows you to execute code based on clicks, movement, and positioning.

## Common Mouse Events

| Event | Description |
| :--- | :--- |
| **click** | Fires after both `mousedown` and `mouseup` occur on the same element. |
| **dblclick** | Fires after two rapid clicks on the same element. |
| **mousedown / mouseup** | Fire when a mouse button is pressed down or released. |
| **mousemove** | Fires continuously as the mouse pointer moves over an element. |
| **mouseover / mouseout** | Fire when the pointer enters or leaves an element (including children). |
| **mouseenter / mouseleave** | Similar to over/out, but does **not** fire for descendants. |
| **contextmenu** | Fires when the user attempts to open the right-click menu. |
| **wheel** | Fires when the mouse wheel is rotated (scrolling/zooming). |
| **drag events** | Series of events (`dragstart`, `dragend`, `dragover`) for drag-and-drop. |

---

## Mouse Position

The `MouseEvent` interface provides an event object containing pointer coordinates and button states. Developers often use `clientX` and `clientY` to track the cursor relative to the viewport.



### Example: Tracking Coordinates

```html
<p id="demo">Move the mouse in this window!</p>

<script>
  // Listen for mousemove on the entire document
  document.addEventListener("mousemove", function (event) {
    document.getElementById("demo").innerHTML = 
      "X: " + event.clientX + " Y: " + event.clientY;
  });
</script>
```
# JavaScript Keyboard Events

Keyboard events occur when a user interacts with the keyboard. These events allow you to capture specific key presses and values.

## Common Keyboard Events

| Event | Description |
| :--- | :--- |
| **keydown** | Fires when a key is first pressed down. |
| **keyup** | Fires when a key is released. |
| **keypress** | (Deprecated) Only fires for character keys. Developers are advised to use `keydown` or `keyup` instead. |

---

## Key Properties

The `KeyboardEvent` object provides properties to identify which key was involved:

| Property | Description | Example (Pressing 'Z') |
| :--- | :--- | :--- |
| **event.key** | Returns the value of the key (can vary by language/Shift). | `"z"` or `"Z"` |
| **event.code** | Returns the physical key code (constant regardless of language). | `"KeyZ"` |

---

## Example: The `keydown` Event

Using `event.key` to detect which key the user pressed:

## Note: 
 keypress does not fire for control keys (like Alt or Backspace). For consistent behavior across all keys, always use keydown. 
```html
<input id="k" type="text" placeholder="Press a key">
<p id="demo"></p>

<script>
  const k = document.getElementById("k");

  // Listen for keydown on the input field
  k.addEventListener("keydown", function (event) {
    // Display the specific key value
    document.getElementById("demo").innerHTML = "You pressed: " + event.key;
  });
</script>
```

# JavaScript DOM: Event Bubbling, Delegation & Propagation Control

## 📌 Overview

Understanding how DOM events flow is essential for writing efficient and maintainable JavaScript.

This guide covers:

- Event Bubbling  
- stopPropagation() & stopImmediatePropagation()  
- Event Delegation  
- event.target vs event.currentTarget  

---

# 🔁 Event Bubbling

## 🔎 Definition

**Event Bubbling** is the default behavior where an event starts from the target element and propagates upward through its ancestors in the DOM tree.

### 📊 Flow Order

```
Target → Parent → Grandparent → document → window
```

## 🧠 Why It Matters

- Enables event delegation
- Allows parent elements to respond to child events
- Can cause unintended behavior if not controlled

---

## 💻 Example: Event Bubbling

### HTML
```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

### JavaScript
```js
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Button clicked");
});
```

### 🖱 Output
```
Button clicked
Parent clicked
```

---

# 🛑 Stopping Propagation

Sometimes you don’t want an event to bubble up to parent elements.

---

## 🔧 stopPropagation()

Stops the event from moving to parent elements.

### JavaScript
```js
document.getElementById("child").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Button clicked only");
});
```

### 🖱 Output
```
Button clicked only
```

✔ Parent handler does NOT run.

---

## 🔧 stopImmediatePropagation()

Stops:
- Event bubbling
- Other listeners on the same element

### JavaScript
```js
const btn = document.getElementById("child");

btn.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  console.log("First listener");
});

btn.addEventListener("click", () => {
  console.log("Second listener (won't run)");
});
```

### 🖱 Output
```
First listener
```

---

# 🧩 Event Delegation

## 🔎 Definition

**Event Delegation** is a technique where a single parent listener handles events for multiple child elements.

Instead of attaching listeners to each child, you attach one listener to the parent.

## 🧠 Why Use It?

- Improves performance
- Works for dynamically added elements
- Reduces memory usage

---

## ❌ Without Delegation (Inefficient)

```js
document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("click", () => {
    console.log("Item clicked");
  });
});
```

❗ Problem: Newly added elements will not have event listeners.

---

## ✅ With Event Delegation (Recommended)

### HTML
```html
<ul id="list">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>
```

### JavaScript
```js
document.getElementById("list").addEventListener("click", (event) => {
  if (event.target.classList.contains("item")) {
    console.log(event.target.textContent + " clicked");
  }
});
```

### 🖱 Output
```
Item 1 clicked
Item 2 clicked
Item 3 clicked
```

✔ Works for future elements too.

---

## ➕ Delegation with Dynamically Added Elements

```js
const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  if (event.target.matches(".item")) {
    console.log("Clicked:", event.target.textContent);
  }
});

// Add new item dynamically
const newItem = document.createElement("li");
newItem.className = "item";
newItem.textContent = "Item 4";
list.appendChild(newItem);
```

✔ Clicking **Item 4** still works.

---

# 🎯 event.target vs event.currentTarget

| Property | Meaning |
|---------|--------|
| event.target | Actual element clicked |
| event.currentTarget | Element with the listener |

### Example
```js
const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  console.log("Target:", event.target);
  console.log("Listener attached to:", event.currentTarget);
});
```

---

# 🧠 Best Practices

- Use event delegation for large lists
- Use stopPropagation carefully
- Prefer `matches()` or `classList.contains()` for filtering
- Avoid attaching too many listeners

---

# 🧾 Quick Summary

| Concept | Purpose |
|--------|--------|
| Event Bubbling | Event moves upward in DOM |
| stopPropagation() | Stops bubbling |
| stopImmediatePropagation() | Stops bubbling + same-element listeners |
| Event Delegation | Parent handles child events efficiently |

---

