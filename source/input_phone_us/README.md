```js
import { InputPhoneUS } from '@t7/forms'
```

This component is used to format a US number.

It supports the same props as a typical `<Input>` component, but the way it fires `handleChange` is slightly different. It includes an additional parameter, which represents an "API" format if is numeric.

In the following example, `apiValue` would be "" if the value is invalid.

```js
// Event callback.
const handleChange = (e, value, apiValue) => {
  /*
    `e` = browser event.

    `value` = "555-867-5309" string.

    `apiValue` = "5558675309" string.
  */
}
```

```jsx
<InputPhoneUS
  /*
    NOTE: All other props
    are similar to `Input`.
  */

  // Formats to "555-867-5309".
  value='5558675309'

  // Events.
  handleChange={handleChange}
/>
```
