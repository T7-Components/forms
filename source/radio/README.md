This component can be used like so.

```js
// Event callback.
const handleChange = (e, value, checked) => {
  /*
    `e` = browser event.

    `value` = string value of the input.

    `checked` is a boolean.
  */
}

const autofocus = true // Default: false.
const disabled = true // Default: false.
const id = '...' // Ensured unique, if blank.
const label = 'Radio label' // Text for `label`.
const name = '...' // Default: blank.
const required = true // Default: false.
const value = '...' // Default: blank.

// Checked state.
const checked = true // Default: false.
```

To use the component, pass these props.

```xml
<Radio
  autofocus={autofocus}
  checked={checked}
  disabled={disabled}
  id={id}
  label={label}
  name={name}
  required={required}
  value={value}

  // Events.
  handleChange={handleChange}
/>
```