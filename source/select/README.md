This component accepts the following `props`.

```js
// Default: none.
const autofocus = true

// Default: none.
const disabled = true

// Ensured unique, if blank.
const id = '...'

// Default: none.
const name = '...'

// Default: false.
const required = true

// 100% wide, without.
const width = 'auto'

// Default: none.
const value = '...'

// Drives the `<options>`.
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
  }
]

// Event callback.
const handleChange = (e, value) => {
  /*
    `e` = browser event.

    `value` is the *.value of the select.
  */
}
```

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