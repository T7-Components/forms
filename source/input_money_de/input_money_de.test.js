// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// Utility methods.
import {
  formatInteger
} from '@t7/utils'

// UI components.
import { InputMoneyDE } from '../'

// Describe `<Component/>` name.
describe('InputMoneyDE', () => {
  // Dummy props.
  const props = {
    value: 1000,

    // Events.
    handleChange: jest.fn()
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <InputMoneyDE
      {...props}
    />
  )

  // Get input.
  const input =
    T.findRenderedDOMComponentWithTag(el, 'input')

  // =======================
  // Test for initial value.
  // =======================

  it('has correct initial value', () => {
    expect(input.value)
      .toContain('€')

    expect(
      parseFloat(
        formatInteger(input.value).slice(0, 4)
      )
    ).toBe(1000)
  })
})