The `<Button>` component can be used as a form element (typical use case) or as a link.

Below is an example of all the props that it can use, though some are mutually exclusive. For instance, you could specify the `type` of button as `submit`, but wouldn't set the `type` of a link.

By passing `href`, the component will be used as an `<a>` link, otherwise a `<button>` tag will be generated.

```js
// Default: none.
const ariaControls = '...'

// Default: none.
const disabled = true

// Default: none.
const href = 'https://example.com/'

// Default: "default".
const mode = 'info | negative | positive | warn'

// Default: "default".
const size = 'small | big'

// Default: none.
const text = 'Button text'

// Default: none.
const target = '_blank | ...'

// Default: none.
const title = '...'

// Default: "button".
const type = 'submit | reset'

/*
  Data you might want to associate
  to the button, to be reported via
  callback when/if it is clicked.
*/
const buttonData = {
  foo: 'bar'
}

// Event callback.
const handleClick = (e, buttonData) => {
  /*
    `e` is the event.

    `buttonData` is whatever you have defined.

    If nothing is set, then it will just be
    the string of "Button Data" passed back.
  */
}
```

```jsx
// Link.
<Button
  buttonData={buttonData}
  disabled={disabled}
  href={href}
  mode={mode}
  size={size}
  text={text}
  target={target}
  title={title}

  // Events.
  handleClick={handleClick}
/>

// Button.
<Button
  ariaControls={ariaControls}
  buttonData={buttonData}
  disabled={disabled}
  mode={mode}
  size={size}
  text={text}
  title={title}
  type={type}

  // Events.
  handleClick={handleClick}
/>
```