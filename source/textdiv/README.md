**Note:** This uses the same props as the `<Textarea>` component, but has a different tag name.

While they are functionally similar, there is quite a bit more going on "under the hood" of `<Textdiv>`.

Its output is a `<div>` with `contenteditable="true"`, that converts anything pasted or typed into it to plain text, much like a default HTML `<texarea>` would.

The benefit of using a `<Textdiv>` component is that it grows with its content, without necessitating a JS grow-by-pixel approach, which is how one might handle a `<textarea>`.

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

```jsx
<Textdiv
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