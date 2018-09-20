```js
import { InputDate } from '@t7/forms'
```

This is a base class, used for building `<InputDateUK>` and `<InputDateUS>`.

You should probably use one of those directly, if `"DD/MM/YYYY"` or `"MM/DD/YYYY"` are needed.

However, if you'd like to extend `<InputDate>` to handle other formats, this is the place.

```jsx
<InputDate
  {...this.props}

  // Or: "DD/MM/YYYY".
  dateFormat='MM/DD/YYYY'
/>
```
