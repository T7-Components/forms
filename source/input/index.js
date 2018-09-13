// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import utils from '@t7/utils'

// Define class.
class Input extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Bind context.
    utils.bind(this)

    // Get default state.
    this.defaultState()
  }

  // Set default state.
  defaultState () {
    let value = this.props.value

    // Ensure a real value.
    if (!utils.exists(value)) {
      value = this.props.defaultValue || ''
    }

    this.state = {
      id: this.props.id || utils.unique(),
      value: value
    }
  }

  // Force state change.
  componentWillReceiveProps (nextProps) {
    const newValue = nextProps.value
    const oldValue = this.props.value

    const isValid =
      utils.exists(newValue) &&
      newValue !== oldValue

    if (isValid) {
      this.setState({
        value: newValue
      })
    }
  }

  // Input loses focus.
  handleBlur (e) {
    // Props.
    const handleChange = this.props.handleChange

    // Trim value.
    const value = utils.trim(e.target.value)

    // Update value.
    this.setState({ value })

    // Fire callback.
    if (typeof handleChange === 'function') {
      handleChange(e, value)
    }
  }

  // Input value change.
  handleChange (e) {
    // Props.
    const handleChange = this.props.handleChange

    // Get value.
    const value = e.target.value

    // Update value.
    this.setState({ value })

    // Fire callback.
    if (typeof handleChange === 'function') {
      handleChange(e, value)
    }
  }

  // Render method.
  render () {
    // State driven.
    const id = this.state.id
    const value = this.state.value

    // Props driven.
    const autofocus = this.props.autofocus
    const disabled = this.props.disabled
    const maxlength = this.props.maxlength
    const name = this.props.name || id
    const placeholder = this.props.placeholder
    const readonly = this.props.readonly
    const required = this.props.required
    const size = this.props.size
    const type = this.props.type
    const width = this.props.width

    // Default class name.
    let className = ['t7-form__input']

    if (width === 'auto') {
      className.push('t7-form__input--width-auto')
    }

    className = className.join(' ')

    // Events.
    const handleBlur = this.handleBlur
    const handleChange = this.handleChange

    return (
      <input
        autoFocus={autofocus}
        className={className}
        disabled={disabled}
        id={id}
        maxLength={maxlength}
        name={name}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
        size={size}
        type={type}

        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
      />
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
  size: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,

  // Default value.
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // Forced value.
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // Events.
  handleChange: PropTypes.func
}

// Prop defaults.
Input.defaultProps = {
  type: 'text'
}

// Export.
export default Input
