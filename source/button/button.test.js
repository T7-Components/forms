// Dependencies.
import React from 'react'
import T from 'react-dom/test-utils'

// UI components.
import { Button } from '../'

// Describe `<Component/>` name.
describe('Button', () => {
  const ariaControls = 'example_id'
  const disabled = true
  const text = 'GO'
  const title = 'Example Title'
  const type = 'submit'

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Button
      ariaControls={ariaControls}
      disabled={disabled}
      text={text}
      title={title}
      type={type}
    />
  )

  // Get content.
  const button =
    T.findRenderedDOMComponentWithClass(el, 't7-form__button')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', () => {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ==============
  // Test for ARIA.
  // ==============

  it('has correct ARIA', () => {
    const x = button.getAttribute('aria-controls')

    expect(x).toBe('example_id')
  })

  // ====================
  // Test disabled state.
  // ====================

  it('has correct state', () => {
    const x = button.disabled

    expect(x).toBe(true)
  })

  // ==============
  // Test for text.
  // ==============

  it('has correct text', () => {
    const x = button.innerHTML

    expect(x).toBe('GO')
  })

  // ===============
  // Test for title.
  // ===============

  it('has correct title', () => {
    const x = button.getAttribute('title')

    expect(x).toBe('Example Title')
  })

  // ==============
  // Test for type.
  // ==============

  it('has correct type', () => {
    const x = button.getAttribute('type')

    expect(x).toBe('submit')
  })
})

// Describe `<Component/>` name.
describe('Button -- link', () => {
  const href = 'http://example.com/'
  const target = '_blank'
  const text = 'GO'
  const title = 'Example Title'

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Button
      href={href}
      target={target}
      text={text}
      title={title}
    />
  )

  // Get button.
  const button = T.findRenderedDOMComponentWithClass(el, 't7-form__button')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', () => {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // =============
  // Test for tag.
  // =============

  it('is a link tag', () => {
    const x = button.tagName.toLowerCase()

    expect(x).toBe('a')
  })

  // ==============
  // Test for href.
  // ==============

  it('has correct href', () => {
    const x = button.getAttribute('href')

    expect(x).toBe('http://example.com/')
  })

  // ================
  // Test for target.
  // ================

  it('is a link tag', () => {
    const x = button.getAttribute('target')

    expect(x).toBe('_blank')
  })

  // ==============
  // Test for text.
  // ==============

  it('has correct text', () => {
    const x = button.innerHTML

    expect(x).toBe('GO')
  })

  // ===============
  // Test for title.
  // ===============

  it('has correct title', () => {
    const x = button.getAttribute('title')

    expect(x).toBe('Example Title')
  })
})
