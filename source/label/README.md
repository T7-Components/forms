The `<Label>` component is used by other form element components. It is typically included alongside a form element, with the parent `props` spread.

It uses the following `props`:

- `id` (string)
- `label` (string)
- `required` (boolean)

```jsx
return (
  <React.Fragment>

    <Label
      {...this.props}
    />

    <textarea
      {...bundle}
    />

  </React.Fragment>
)
```
