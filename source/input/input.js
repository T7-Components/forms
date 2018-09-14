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
      id = unique(),
      value = ''
    } = this.props

    this.state = {
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
        value: newValue
      }
    }

    // Expose object.
    return newState
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

    // Bundle.
    const bundle = {
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
          {...this.props}
          id={id}
        />

        <input
          {...bundle}
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
  handleChange: PropTypes.func
}

// Prop defaults.
Input.defaultProps = {
  type: 'text',

  // Events.
  handleChange: () => {}
}

// Export.
export default Input
