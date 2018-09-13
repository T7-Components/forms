// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import { Radio } from '../'

// Describe `<Component/>` name.
describe('Radio', () => {
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
    <Radio
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

  // Get radio.
  const radio = parent.querySelector('input[type="radio"]')

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
    expect(parent.htmlFor).toBe(radio.id)
    expect(parent.textContent.trim()).toBe('example_label')
  })

  // ===============
  // Test for radio.
  // ===============

  it('is not checked', () => {
    expect(radio.checked).toBe(false)
  })

  it('is disabled', () => {
    expect(radio.disabled).toBe(true)
  })

  it('has correct ID', () => {
    expect(radio.id).toBe('example_id')
  })

  it('has correct name', () => {
    expect(radio.name).toBe('example_name')
  })

  it('has correct value', () => {
    expect(radio.value).toBe('example_value')
  })

  it('is required', () => {
    expect(radio.hasAttribute('required')).toBe(true)
  })

  it('responds to clicks', () => {
    // Fake click to check.
    T.Simulate.change(radio, {
      target: {
        checked: true
      }
    })
  })
})
