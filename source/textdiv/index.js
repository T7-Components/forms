// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind,
  contentOnChange,
  contentOnFocus,
  contentOnPaste,
  contentToMarkup,
  contentToText,
  exists,
  trim,
  unique
} from '@t7/utils'

// UI components.
import { Label } from '../'

// Define class.
class Textdiv extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Bind context.
    bind(this)

    // Get default state.
    this.defaultState()
  }

  // Set default state.
  defaultState () {
    // Props.
    const {
      placeholder,
      id = unique(),
      value = ''
    } = this.props

    // Placeholder?
    const hasPlaceholder = (
      !value &&
      exists(placeholder)
    )

    this.state = {
      hasPlaceholder,
      id,
      value
    }
  }

  // Update state.
  static getDerivedStateFromProps (props, state) {
    // Get values.
    const newValue = props.value
    const oldValue = state.value

    // Set in conditional.
    let newState = null

    // Update?
    if (
      exists(newValue) &&
      newValue !== oldValue
    ) {
      newState = {
        hasPlaceholder: false,
        value: newValue
      }
    }

    // Expose object.
    return newState
  }

  // Automatically called after `render`.
  componentDidMount () {
    document.body.setAttribute('spellcheck', false)
  }

  // Focus event.
  handleFocus (e) {
    if (!this.state.hasPlaceholder) {
      return
    }

    contentOnFocus(e)

    this.setState({
      hasPlaceholder: false
    })
  }

  // When input loses focus.
  handleBlur (e = {}) {
    // Props.
    const { placeholder } = this.props

    // Get target.
    const { target } = e

    // Get value.
    const {
      innerHTML: value
    } = target

    // Placeholder?
    const hasPlaceholder = (
      !trim(value) &&
      exists(placeholder)
    )

    this.setState({ hasPlaceholder })

    contentOnChange(e)
    this.handleChange(e)
  }

  // When user types.
  handleKeyUp (e) {
    contentOnChange(e)
    this.handleChange(e)
  }

  // When user pastes text.
  handlePaste (e) {
    contentOnPaste(e)
    this.handleChange(e)
  }

  // When value changes.
  handleChange (e = {}) {
    // Props.
    const { placeholder } = this.props

    // Get target.
    const {
      target = {}
    } = e

    // Get value.
    let {
      innerHTML: value
    } = target

    // Format.
    value = contentToText(value)

    // Is placeholder?
    if (value === placeholder) {
      value = ''
    }

    // Callback.
    this.props.handleChange(e, value)
  }

  // Render method.
  render () {
    // State.
    const {
      hasPlaceholder,
      id
    } = this.state

    // Props.
    const {
      autofocus,
      disabled,
      name,
      placeholder,
      required
    } = this.props

    // Get value.
    let { value } = this.state

    // Use fallback?
    value = (
      value ||
      placeholder
    )

    // Format.
    const dangerouslySetInnerHTML = {
      __html: contentToMarkup(value)
    }

    // Events.
    const {
      handleBlur,
      handleChange,
      handleFocus,
      handleKeyUp,
      handlePaste
    } = this

    // Bundle.
    const bundle = {
      dangerouslySetInnerHTML,
      disabled,
      id,
      name,
      placeholder,
      required,
      value,
      autoFocus: autofocus,
      className: 't7-form__textarea',
      contentEditable: !disabled,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onInput: handleChange,
      onKeyUp: handleKeyUp,
      onPaste: handlePaste,
      'data-has-placeholder': hasPlaceholder
    }

    // Expose UI.
    return (
      <React.Fragment>

        <Label
          {...this.props}
        />

        <div
          {...bundle}
        />

      </React.Fragment>
    )
  }
}

// Validation.
Textdiv.propTypes = {
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,

  // Forced value.
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // Events.
  handleChange: PropTypes.func
}

// Prop defaults.
Textdiv.defaultProps = {
  placeholder: '',
  value: '',

  // Events.
  handleChange: () => {}
}

// Export.
export default Textdiv
