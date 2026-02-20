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