This component is a typical `<textarea>`. When the `blur` event fires, it will trim the content, and ensure that all unnecessary whitespace is removed, while still retaining `\n\n` as a visual "paragraph."

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

// Default: none.
const value = '...'

// Event callback.
const handleChange = (e, value) => {
  /*
    `e` = browser event.

    `value` = string value of the input.
  */
}
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