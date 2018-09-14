This is a multi-purpose component for all textual inputs.

By changing the `type` you can use it as `"text"`, `"password"`, etc.

It accepts the following `props`.

```js
// Default: none.
const autofocus = true

// Default: none.
const disabled = true

// Ensured unique, if blank.
const id = '...'

// Default: none.
const name = '...'

// Default: none.
const placeholder = '...'

// Default: none.
const required = true

// Default: "text".
const type = 'password'

/*
  Note: If you want to set an input to
  a particular character width, you must
  pass `width = 'auto'` and the size.
*/

// Default: none.
const size = '10'

// 100% wide, without.
const width = 'auto'

// Event callback.
const handleChange = (e, value) => {
  /*
    `e` = browser event.

    `value` = string value of the input.
  */
}
```

```jsx
<Input
  autofocus={autofocus}
  disabled={disabled}
  id={id}
  name={name}
  placeholder={placeholder}
  required={required}
  type={type}

  // Width overrides.
  size={size}
  width={width}

  // Events.
  handleChange={handleChange}
/>
```