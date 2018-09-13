// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import { Input } from '../'

// Describe `<Component/>` name.
describe('Input', () => {
  // Dummy props.
  const props = {
    disabled: true,
    id: 'example_id',
    name: 'example_name',
    placeholder: 'example_placeholder',
    required: true,
    size: 10,
    type: 'search',
    value: 'example_value',
    width: 'auto',

    // Events.
    handleChange: jest.fn()
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Input
      {...props}
    />
  )

  // Get input.
  const input =
    T.findRenderedDOMComponentWithTag(el, 'input')

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

  // ====================
  // Test for placeholer.
  // ====================

  it('has placeholer', () => {
    expect(input.getAttribute('placeholder'))
      .toBe(props.placeholder)
  })

  // ==================
  // Test for required.
  // ==================

  it('is required', () => {
    expect(input.hasAttribute('required'))
      .toBe(true)
  })

  // ===============
  // Test for value.
  // ===============

  it('has correct value', () => {
    expect(input.value)
      .toBe(props.value)
  })

  // ==============
  // Test for type.
  // ==============

  it('has correct type', () => {
    expect(input.type)
      .toBe(props.type)
  })

  // ==============
  // Test for size.
  // ==============

  it('has correct size', () => {
    expect(input.size)
      .toBe(props.size)
  })

  // ====================
  // Test for auto width.
  // ====================

  it('has auto width', () => {
    expect(input.className)
      .toContain('t7-form__input--width-auto')
  })

  // ================
  // Test for change.
  // ================

  it('handles "change" event', () => {
    // Dummy value.
    const BEFORE = ' FOO  BAR '
    const AFTER = 'FOO BAR'

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
      Input.getDerivedStateFromProps(props, state)

    expect(newState.value)
      .toBe(props.value)
  })
})
