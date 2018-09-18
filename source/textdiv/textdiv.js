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
      id = unique(),
      value = ''
    } = this.props

    this.state = {
      id,
      value,
      oldValue: value
    }
  }

  // Update state.
  static getDerivedStateFromProps (props = {}, state = {}) {
    // Props.
    const { value } = props

    // State.
    const { oldValue } = state

    // Set in conditional.
    let newState = null

    // Update?
    if (
      exists(value) &&
      value !== oldValue
    ) {
      newState = {
        value,
        oldValue: value
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
    contentOnFocus(e)
  }

  // When input loses focus.
  handleBlur (e = {}) {
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

    // Get element.
    const {
      currentTarget: el = {}
    } = e

    // Get value.
    let {
      innerHTML: value
    } = el

    // Format.
    value = contentToText(value)

    // Clear value?
    if (value === placeholder) {
      value = ''
    }

    // Set attribute.
    if (typeof el.setAttribute === 'function') {
      el.setAttribute('data-has-placeholder', !value)
    }

    // Callback.
    this.props.handleChange(e, value)
  }

  // Render method.
  render () {
    // State.
    const { id } = this.state

    // Props.
    const {
      autofocus,
      disabled,
      label,
      name,
      placeholder,
      readonly,
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

    // Props for label.
    const propsForLabel = {
      id,
      label,
      required
    }

    // Props for input.
    const propsForInput = {
      dangerouslySetInnerHTML,
      disabled,
      id,
      name,
      placeholder,
      required,
      value,
      autoFocus: autofocus,
      className: 't7-textarea',
      onBlur: handleBlur,
      onFocus: handleFocus,
      onInput: handleChange,
      onKeyUp: handleKeyUp,
      onPaste: handlePaste,

      contentEditable: (
        !disabled &&
        !readonly
      ),

      tabIndex: (
        disabled
          ? null
          : 0
      ),

      'data-has-placeholder': (
        !value ||
        trim(value) === trim(placeholder)
      )
    }

    // Expose UI.
    return (
      <React.Fragment>

        <Label
          {...propsForLabel}
        />

        <div
          {...propsForInput}
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
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
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
  // Events.
  handleChange: () => {}
}

// Export.
export default Textdiv
