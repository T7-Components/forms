// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import { Checkbox } from '../'

// Describe `<Component/>` name.
describe('Checkbox', () => {
  // Props.
  const props = {
    checked: true,
    disabled: true,
    id: 'example_id',
    label: 'example_label',
    name: 'example_name',
    required: true,
    value: 'example_value',

    // Events.
    handleChange: jest.fn()
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Checkbox
      {...props}
    />
  )

  // Get parent label.
  const parent =
    T.findRenderedDOMComponentWithTag(el, 'label')

  // Get input.
  const input =
    parent.querySelector('input')

  // ===============
  // Test for label.
  // ===============

  it('has correct label', () => {
    expect(parent.htmlFor)
      .toBe(input.id)

    expect(parent.textContent)
      .toBe('example_label')
  })

  // =================
  // Test for checked.
  // =================

  it('is checked', () => {
    expect(input.checked)
      .toBe(true)
  })

  // ==================
  // Test for disabled.
  // ==================

  it('is disabled', () => {
    expect(input.disabled)
      .toBe(true)
  })

  // ============
  // Test for ID.
  // ============

  it('has correct ID', () => {
    expect(input.id)
      .toBe(props.id)
  })

  // ==============
  // Test for name.
  // ==============

  it('has correct name', () => {
    expect(input.name)
      .toBe(props.name)
  })

  // ===============
  // Test for value.
  // ===============

  it('has correct value', () => {
    expect(input.value)
      .toBe(props.value)
  })

  // ==================
  // Test for required.
  // ==================

  it('is required', () => {
    expect(input.hasAttribute('required'))
      .toBe(true)
  })

  // ==============
  // Test for type.
  // ==============

  it('has correct type', () => {
    expect(input.type)
      .toBe('checkbox')
  })

  // ========================
  // Test for "change" event.
  // ========================

  it('handles "change" event', () => {
    // Dummy values.
    const checked = true
    const value = 'VALUE'

    // Dummy event.
    const e = {
      currentTarget: {
        checked,
        value
      }
    }

    // Dummy object.
    const o = expect.any(Object)

    // Fire event.
    el.handleChange(e)

    expect(props.handleChange)
      .toBeCalledWith(o, value, checked)
  })

  // =====================
  // Test for props/state.
  // =====================

  it('handles props/state change', () => {
    // Dummy state.
    const state = {
      checked: false
    }

    // Fire event.
    const newState =
      Checkbox.getDerivedStateFromProps(props, state)

    expect(newState.checked)
      .toBe(props.checked)
  })
})
