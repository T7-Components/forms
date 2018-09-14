```js
import { Input } from '@t7/forms'
```

This is a multi-purpose component for all textual inputs.

By changing the `type` you can use it as `"text"`, `"password"`, etc.

It accepts the following `props`.

```js
// Default: none.
const autofocus = true

// Default: none.
const disabled = true

// Ensured unique, if blank.
const id = 'string'

// Default: none.
const label = 'string'

// Default: none.
const name = 'string'

// Default: none.
const placeholder = 'string'

// Default: none.
const required = true

// Default: none.
const size = 10

// Default: "text".
const type = 'password'

// Default: 100% wide.
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