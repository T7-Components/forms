// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind,
  exists,
  trim,
  unique
} from '@t7/utils'

// UI components.
import { Label } from '../'

// Define class.
class Input extends React.Component {
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
      mask,
      id = unique(),
      value = ''
    } = this.props

    this.state = {
      id,
      oldValue: value,
      value: mask(value)
    }
  }

  // Update state.
  static getDerivedStateFromProps (props = {}, state = {}) {
    // Props.
    const {
      mask,
      value
    } = props

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
        oldValue: value,
        value: mask(value)
      }
    }

    // Expose object.
    return newState
  }

  // Apply mask.
  applyMask (e = {}, value = '') {
    // Get target.
    const {
      target = {}
    } = e

    // Set in conditional.
    let oldCaret

    // Supports selection?
    if (typeof target.selectionStart === 'number') {
      oldCaret = target.selectionStart
    }

    // Format.
    const newValue = this.props.mask(value)

    // Wait for re-render.
    const timer = setTimeout(() => {
      // Clear.
      clearTimeout(timer)

      // Supports selection?
      if (
        exists(oldCaret) &&
        target === document.activeElement &&
        typeof target.setSelectionRange === 'function'
      ) {
        const diff =
          newValue.length - value.length

        const newCaret =
          oldCaret - Math.abs(diff)

        // Move caret.
        target.setSelectionRange(newCaret, newCaret)
      }
    }, 0)

    // Expose string.
    return newValue
  }

  // Change event.
  handleChange (e = {}) {
    // Get target.
    const {
      type,
      target = {}
    } = e

    // Get value.
    let {
      value = ''
    } = target

    // Clean up.
    if (type === 'blur') {
      value = trim(value)
    }

    // Apply mask.
    value = this.applyMask(e, value)

    // Update state.
    this.setState({ value })

    // Callback.
    this.props.handleChange(e, value)
  }

  // Render method.
  render () {
    // State.
    const {
      id,
      value
    } = this.state

    // Props.
    const {
      autofocus,
      disabled,
      label,
      maxlength,
      name,
      placeholder,
      readonly,
      required,
      size,
      type,
      width
    } = this.props

    // Events.
    const { handleChange } = this

    // Default class name.
    let className = ['t7-input']

    if (
      size ||
      width === 'auto'
    ) {
      className.push('t7-input--width-auto')
    }

    // Convert to string.
    className = className.join(' ')

    // Props for label.
    const propsForLabel = {
      id,
      label,
      required
    }

    // Props for input.
    const propsForInput = {
      className,
      disabled,
      id,
      name,
      placeholder,
      required,
      size,
      type,
      value,
      autoFocus: autofocus,
      maxLength: maxlength,
      onBlur: handleChange,
      onChange: handleChange,
      readOnly: readonly
    }

    // Expose UI.
    return (
      <React.Fragment>

        <Label
          {...propsForLabel}
        />

        <input
          {...propsForInput}
        />

      </React.Fragment>
    )
  }
}

// Validation.
Input.propTypes = {
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  maxlength: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  width: PropTypes.string,

  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // Events.
  handleChange: PropTypes.func,

  // Mask value.
  mask: PropTypes.func
}

// Prop defaults.
Input.defaultProps = {
  type: 'text',

  // Events.
  handleChange: () => {},

  // Mask value.
  mask: (value) => {
    return value
  }
}

// Export.
export default Input
