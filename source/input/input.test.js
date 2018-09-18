// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import { Input } from '../'

// Fake timers.
jest.useFakeTimers()

// Describe `<Component/>` name.
describe('Input', () => {
  // Reset.
  beforeEach(() => {
    Object.defineProperty(document, 'activeElement', {
      writable: true,
      value: null
    })
  })

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
      .toContain('t7-input--width-auto')
  })

  // ============================
  // Test for "apply mask" event.
  // ============================

  it('handles "apply mask" event', () => {
    // Dummy value.
    const value = 'VALUE'

    // Dummy event.
    const e = {
      target: {
        selectionStart: 0,
        setSelectionRange: jest.fn()
      }
    }

    // Simulate "active" state.
    document.activeElement = e.target

    // Fire event.
    const newValue = el.applyMask(e, value)

    // Fast-forward.
    jest.runOnlyPendingTimers()

    expect(e.target.setSelectionRange)
      .toBeCalledWith(0, 0)

    expect(newValue)
      .toBe(value)
  })

  // ========================
  // Test for "change" event.
  // ========================

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
    // Dummy props.
    const newProps = {
      value: 'new_value',

      // Mask value.
      mask: (value) => {
        return value
      }
    }

    // Dummy state.
    const oldState = {
      value: 'old_value'
    }

    // Fire event.
    const newState =
      Input.getDerivedStateFromProps(newProps, oldState)

    expect(newState.value)
      .toBe(newProps.value)
  })
})
