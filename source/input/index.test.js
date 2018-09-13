// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import Input from '.'

// Describe `<Component/>` name.
describe('Input', () => {
  const disabled = true
  const id = 'example_id'
  const name = 'example_name'
  const placeholder = 'example_placeholder'
  const required = true
  const type = 'search'

  // Must have `auto` width, to use `size`.
  const size = '10'
  const width = 'auto'

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Input
      disabled={disabled}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      type={type}

      size={size}
      width={width}
    />
  )

  // Get input.
  const input = T.findRenderedDOMComponentWithTag(el, 'input')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', () => {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ===============
  // Test for input.
  // ===============

  it('is disabled', () => {
    expect(input.disabled).toBe(true)
  })

  it('has correct ID', () => {
    expect(input.id).toBe('example_id')
  })

  it('has correct name', () => {
    expect(input.name).toBe('example_name')
  })

  it('has placeholer', () => {
    expect(input.getAttribute('placeholder')).toBe('example_placeholder')
  })

  it('is required', () => {
    expect(input.hasAttribute('required')).toBe(true)
  })

  it('has correct type', () => {
    expect(input.type).toBe('search')
  })

  it('has correct size', () => {
    expect(input.size).toBe(10)
  })

  it('has auto width', () => {
    expect(input.className).toMatch('t7-form__input--width-auto')
  })
})
