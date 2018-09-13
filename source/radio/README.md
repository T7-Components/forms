This component can be used like so.

```js
// Event callback.
const handleChange = (e, value, checked) => {
  /*
    `e` is the event.

    `value` is the *.value of the checkbox.

    `checked` is a boolean.
  */
}

const autofocus = true // Default: false.
const disabled = true // Default: false.
const id = '...' // Ensured unique, if blank.
const label = 'Individual radio label' // Accompanying text.
const name = '...' // Uses id, if blank.
const required = true // Default: false.
const value = '...' // Uses label, if blank.

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