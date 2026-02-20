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