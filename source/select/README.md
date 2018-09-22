```js
import { Select } from '@t7/forms'
```

This component accepts the following `props`.

```js
// Default: none.
const autofocus = true

// Default: none.
const classNameForAbbr = 'string'

// Default: none.
const classNameForError = 'string'

// Default: none.
const classNameForInput = 'string'

// Default: none.
const classNameForLabel = 'string'

// Default: none.
const disabled = true

// Default: none.
const errorMessage = 'string'

// Ensured unique, if blank.
const id = 'string'

// Default: none.
const label = 'string'

// Default: none.
const name = 'string'

// Default: false.
const required = true

// Default: none.
const styleForAbbr = {color: 'red'}

// Default: none.
const styleForError = {color: 'red'}

// Default: none.
const styleForInput = {color: 'red'}

// Default: none.
const styleForLabel = {color: 'red'}

// Default: 100% wide.
const width = 'auto'

// Default: none.
const value = 'string'

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
  errorMessage={errorMessage}
  id={id}
  name={name}
  options={options}
  required={required}
  value={value}
  width={width}

  // Extra class names.
  classNameForAbbr={classNameForAbbr}
  classNameForError={classNameForError}
  classNameForInput={classNameForInput}
  classNameForLabel={classNameForLabel}

  // Inline styles.
  styleNameForAbbr={styleNameForAbbr}
  styleNameForError={styleNameForError}
  styleNameForInput={styleNameForInput}
  styleNameForLabel={styleNameForLabel}

  // Events.
  handleChange={handleChange}
/>
```
