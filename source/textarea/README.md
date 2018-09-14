This component can be used like so.

```js
// Event callback.
const handleChange = (e, value) => {
  /*
    `e` is the event.

    `value` is the *.value of the textarea.
  */
}

const autofocus = true // Default: false.
const disabled = true // Default: false.
const id = '...' // Ensured unique, if blank.
const name = '...' // Default: none.
const placeholder = '...' // Default: none.
const required = true // Default: false.

// Determine pre-filled text.
const value = '...' // Default: none.
```

To use the component, pass these props.

```jsx
<Textarea
  autofocus={autofocus}
  disabled={disabled}
  id={id}
  name={name}
  placeholder={placeholder}
  required={required}
  value={value}

  // Events.
  handleChange={handleChange}
/>
```