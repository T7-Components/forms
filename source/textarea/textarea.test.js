// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import { Textarea } from '../'

// Describe `<Component/>` name.
describe('Textarea', () => {
  // Dummy props.
  const props = {
    disabled: true,
    id: 'example_id',
    label: 'example_label',
    name: 'example_name',
    placeholder: 'example_placeholder',
    required: true,
    value: 'example_value',

    // Events.
    handleChange: jest.fn()
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Textarea
      {...props}
    />
  )

  // Get content.
  const label =
    T.findRenderedDOMComponentWithTag(el, 'label')

  const textarea =
    T.findRenderedDOMComponentWithTag(el, 'textarea')

  // ===============
  // Test for label.
  // ===============

  it('is has correct label', () => {
    expect(label.textContent)
      .toBe(props.label + ' *')
  })

  // ==================
  // Test for disabled.
  // ==================

  it('is disabled', () => {
    expect(textarea.disabled)
      .toBe(true)
  })

  // ============
  // Test for ID.
  // ============

  it('has correct ID', () => {
    expect(textarea.id)
      .toBe(props.id)
  })

  // ==============
  // Test for name.
  // ==============

  it('has correct name', () => {
    expect(textarea.name)
      .toBe(props.name)
  })

  // =====================
  // Test for placeholder.
  // =====================

  it('has correct placeholder', () => {
    expect(textarea.getAttribute('placeholder'))
      .toBe(props.placeholder)
  })

  // ==================
  // Test for required.
  // ==================

  it('is required', () => {
    expect(textarea.hasAttribute('required'))
      .toBe(true)
  })

  // ===============
  // Test for value.
  // ===============

  it('has correct value', () => {
    expect(textarea.value)
      .toBe(props.value)
  })

  // ================
  // Test for change.
  // ================

  it('responds to change', () => {
    // Dummy value.
    const BEFORE = ' FOO \n \n BAR '
    const AFTER = 'FOO \n\n BAR'

    // Dummy event.
    const e = {
      target: {
        value: BEFORE
      },
      type: 'blur'
    }

    // Dummy object.
    const o = expect.any(Object)

    // Fire event.
    el.handleChange(e)

    expect(props.handleChange)
      .toBeCalledWith(o, AFTER)
  })

  // =====================
  // Test for props/state.
  // =====================

  it('handles props/state change', () => {
    // Dummy state.
    const state = {
      value: 'old_value'
    }

    // Fire event.
    const newState =
      Textarea.getDerivedStateFromProps(props, state)

    expect(newState.value)
      .toBe(props.value)
  })
})
