This component can be used like so.

```js
// Event callback.
const handleChange = (e, value) => {
  /*
    `e` is the event.

    `value` is the *.value of the select.
  */
}

const ariaControls = '...' // Default: null.
const autofocus = true // Default: false.
const disabled = true // Default: false.
const id = '...' // Ensured unique, if blank.
const name = '...' // Uses id, if blank.
const required = true // Default: false.
const width = 'auto' // Default: 100%.

// Determines selected option.
const value = '...' // Default: none.

const options = [
  {
    value: '',
    name: 'Select...'
  },
  {
    value: '1',
    name: 'Uno'
  },
  {
    value: '2',
    name: 'Dos'
  },
  {
    value: '3',
    name: 'Tres'
  }
]
```

To use the component, pass these props.

```jsx
<Select
  ariaControls={ariaControls}
  autofocus={autofocus}
  disabled={disabled}
  id={id}
  name={name}
  options={options}
  required={required}
  value={value}

  // Events.
  handleChange={handleChange}
/>
```