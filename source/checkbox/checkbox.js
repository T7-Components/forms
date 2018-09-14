// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind,
  exists,
  unique
} from '@t7/utils'

// Define class.
class Checkbox extends React.Component {
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
      checked = ''
    } = this.props

    this.state = {
      id,
      checked: !!checked
    }
  }

  // Update state.
  static getDerivedStateFromProps (props, state) {
    // Get values.
    const newChecked = props.checked
    const oldChecked = state.checked

    // Set in conditional.
    let newState = null

    // Update?
    if (
      exists(newChecked) &&
      newChecked !== oldChecked
    ) {
      newState = {
        checked: newChecked
      }
    }

    // Expose object.
    return newState
  }

  // Change event.
  handleChange (e = {}) {
    // Get target.
    const { target } = e

    // Get value.
    const {
      checked,
      value = ''
    } = target

    this.setState({
      checked: !!checked
    })

    // Callback.
    this.props.handleChange(e, value, checked)
  }

  // Render method.
  render () {
    // State.
    const {
      checked,
      id
    } = this.state

    // Props
    const {
      autofocus,
      disabled,
      label,
      name,
      required,
      type,
      value
    } = this.props

    // Events.
    const { handleChange } = this

    // Set in conditional.
    let inputClassName
    let labelClassName
    let spanClassName

    // Checkbox?
    if (type === 'checkbox') {
      inputClassName = 't7-form__checkbox'
      labelClassName = 't7-form__checkbox__label'
      spanClassName = 't7-form__checkbox__fake'

    // Radio?
    } else if (type === 'radio') {
      inputClassName = 't7-form__radio'
      labelClassName = 't7-form__radio__label'
      spanClassName = 't7-form__radio__fake'
    }

    // Bundle.
    const bundle = {
      checked,
      disabled,
      id,
      name,
      required,
      type,
      value,
      autoFocus: autofocus,
      className: inputClassName,
      onChange: handleChange
    }

    // Expose UI.
    return (
      <label
        htmlFor={id}
        className={labelClassName}
      >
        <input
          {...bundle}
        />
        <span className={spanClassName} />
        {label}
      </label>
    )
  }
}

// Validation.
Checkbox.propTypes = {
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,

  // Alphanumeric.
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // Control checked state.
  checked: PropTypes.bool,

  // Events.
  handleChange: PropTypes.func
}

// Prop defaults.
Checkbox.defaultProps = {
  checked: false,
  type: 'checkbox',

  // Events.
  handleChange: () => {}
}

// Export.
export default Checkbox
