// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import { Textdiv } from '../'

// Describe `<Component/>` name.
describe('Textdiv', () => {
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
    <Textdiv
      {...props}
    />
  )

  // Get content.
  const label =
    T.findRenderedDOMComponentWithTag(el, 'label')

  const textdiv =
    T.findRenderedDOMComponentWithTag(el, 'div')

  // ======
  // Reset.
  // ======

  beforeEach(() => {
    jest.resetAllMocks()
    jest.restoreAllMocks()
    el.defaultState()
  })

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
    expect(textdiv.hasAttribute('disabled'))
      .toBe(props.disabled)
  })

  // ===================
  // Test for edit mode.
  // ===================

  it('edit mode is off', () => {
    expect(textdiv.getAttribute('contenteditable'))
      .toBe('' + !props.disabled)
  })

  // ============
  // Test for ID.
  // ============

  it('has correct ID', () => {
    expect(textdiv.id)
      .toBe(props.id)
  })

  // ==============
  // Test for name.
  // ==============

  it('has correct name', () => {
    expect(textdiv.getAttribute('name'))
      .toBe(props.name)
  })

  // =====================
  // Test for placeholder.
  // =====================

  it('has correct placeholder', () => {
    expect(textdiv.getAttribute('placeholder'))
      .toBe(props.placeholder)
  })

  // ==================
  // Test for required.
  // ==================

  it('is required', () => {
    expect(textdiv.hasAttribute('required'))
      .toBe(props.required)
  })

  // ===============
  // Test for value.
  // ===============

  it('has correct value', () => {
    expect(textdiv.innerHTML)
      .toBe(props.value)
  })

  // ========================
  // Test for "change" event.
  // ========================

  it('handles "change" event', () => {
    // Dummy value.
    const BEFORE = ' <br>FOO<br><br><br>BAR<br> '
    const AFTER = 'FOO\n\nBAR'

    // Dummy event.
    const e = {
      target: {
        innerHTML: BEFORE
      }
    }

    // Dummy object.
    const o = expect.any(Object)

    // Fire event.
    el.handleChange(e)

    expect(props.handleChange)
      .toBeCalledWith(o, AFTER)
  })

  // ========================
  // Test for "change" event.
  // ========================

  it('handles "change" event -- early exit', () => {
    // Dummy value.
    const BEFORE = props.placeholder
    const AFTER = ''

    // Dummy event.
    const e = {
      target: {
        innerHTML: BEFORE
      }
    }

    // Dummy object.
    const o = expect.any(Object)

    // Fire event.
    el.handleChange(e)

    expect(props.handleChange)
      .toBeCalledWith(o, AFTER)
  })

  // ======================
  // Test for "blur" event.
  // ======================

  it('handles "blur" event', () => {
    // Dummy value.
    const BEFORE = ' <br>FOO<br><br><br>BAR<br> '
    const AFTER = 'FOO\n\nBAR'

    // Dummy event.
    const e = {
      target: {
        innerHTML: BEFORE
      }
    }

    // Dummy object.
    const o = expect.any(Object)

    // Fire event.
    el.handleBlur(e)

    expect(props.handleChange)
      .toBeCalledWith(o, AFTER)
  })

  // =======================
  // Test for "focus" event.
  // =======================

  it('handles "focus" event', () => {
    // Spy.
    const setState =
      jest.spyOn(el, 'setState')

    // Fire event.
    el.handleFocus()

    // Update state.
    el.state.hasPlaceholder = true

    // Fire event.
    el.handleFocus()

    expect(setState)
      .toBeCalledWith({
        hasPlaceholder: false
      })
  })

  // ========================
  // Test for "key up" event.
  // ========================

  it('handles "key up" event', () => {
    // Spy.
    const handleChange =
      jest.spyOn(el, 'handleChange')

    // Dummy event.
    const e = {
      foo: true
    }

    // Fire event.
    el.handleKeyUp(e)

    expect(handleChange)
      .toBeCalledWith(e)
  })

  // =======================
  // Test for "paste" event.
  // =======================

  it('handles "paste" event', () => {
    // Spy.
    const handleChange =
      jest.spyOn(el, 'handleChange')

    // Dummy event.
    const e = {
      foo: true
    }

    // Fire event.
    el.handlePaste(e)

    expect(handleChange)
      .toBeCalledWith(e)
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
      Textdiv.getDerivedStateFromProps(props, state)

    expect(newState.value)
      .toBe(props.value)

    expect(newState.hasPlaceholder)
      .toBe(false)
  })
})