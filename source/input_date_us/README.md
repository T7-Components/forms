```js
import { InputDateUS } from '@t7/forms'
```

This component handles formatting `"MMDDYYYY"` into `"MM/DD/YYYY"`.

It supports the same props as a typical `<Input>` component, but the way it fires `handleChange` is slightly different. It includes an additional parameter, which represents an "API" format if the date is valid.

In the following example, `apiValue` would be `""` if the value is invalid.

```js
// Event callback.
const handleChange = (e, value, apiValue) => {
  /*
    `e` = browser event.

    `value` = "MM/DD/YYYY" string.

    `apiValue` = "YYYY-MM-DD" string.
  */
}
```

```jsx
<InputDateUS
  /*
    NOTE: All other props
    are similar to `Input`.
  */

  // Formats to "12/31/2018".
  value='2018-12-31'

  // Events.
  handleChange={handleChange}
/>
```
