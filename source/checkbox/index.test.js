// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import Checkbox from '.'

// Describe `<Component/>` name.
describe('Checkbox', () => {
  const disabled = true
  const id = 'example_id'
  const label = 'example_label'
  const name = 'example_name'
  const required = true
  const value = 'example_value'

  // Called from `it responds to clicks`.
  const handleChange = (e, value, checked) => {
    expect(checked).toBe(true)
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Checkbox
      disabled={disabled}
      id={id}
      label={label}
      name={name}
      required={required}
      value={value}

      handleChange={handleChange}
    />
  )

  // Get parent label.
  const parent = T.findRenderedDOMComponentWithTag(el, 'label')

  // Get checkbox.
  const checkbox = parent.querySelector('input[type="checkbox"]')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', () => {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ===============
  // Test for label.
  // ===============

  it('has associated label', () => {
    expect(parent.htmlFor).toBe(checkbox.id)
    expect(parent.textContent.trim()).toBe('example_label')
  })

  // ==================
  // Test for checkbox.
  // ==================

  it('is not checked', () => {
    expect(checkbox.checked).toBe(false)
  })

  it('is disabled', () => {
    expect(checkbox.disabled).toBe(true)
  })

  it('has correct ID', () => {
    expect(checkbox.id).toBe('example_id')
  })

  it('has correct name', () => {
    expect(checkbox.name).toBe('example_name')
  })

  it('has correct value', () => {
    expect(checkbox.value).toBe('example_value')
  })

  it('is required', () => {
    expect(checkbox.hasAttribute('required')).toBe(true)
  })

  it('responds to clicks', () => {
    // Fake click to check.
    T.Simulate.change(checkbox, {
      target: {
        checked: true
      }
    })
  })
})
