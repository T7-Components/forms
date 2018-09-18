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
      checked,
      id = unique()
    } = this.props

    this.state = {
      id,
      checked: !!checked,
      oldChecked: checked
    }
  }

  // Update state.
  static getDerivedStateFromProps (props = {}, state = {}) {
    // Props.
    const { checked } = props

    // State.
    const { oldChecked } = state

    // Set in conditional.
    let newState = null

    // Update?
    if (
      exists(checked) &&
      checked !== oldChecked
    ) {
      newState = {
        checked,
        oldChecked: checked
      }
    }

    // Expose object.
    return newState
  }

  // Change event.
  handleChange (e = {}) {
    // Get element.
    const {
      currentTarget: el = {}
    } = e

    // Get value.
    const {
      checked,
      value = ''
    } = el

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
      inputClassName = 't7-checkbox'
      labelClassName = 't7-checkbox__label'
      spanClassName = 't7-checkbox__fake'

    // Radio?
    } else if (type === 'radio') {
      inputClassName = 't7-radio'
      labelClassName = 't7-radio__label'
      spanClassName = 't7-radio__fake'
    }

    // Props for input.
    const propsForInput = {
      disabled,
      id,
      name,
      required,
      type,
      value,
      autoFocus: autofocus,
      className: inputClassName,
      onChange: handleChange,
      onFocus: handleChange
    }

    // Radio?
    if (type === 'radio') {
      propsForInput.defaultChecked = checked

    // Checkbox?
    } else {
      propsForInput.checked = checked
    }

    // Expose UI.
    return (
      <label
        htmlFor={id}
        className={labelClassName}
      >

        <input
          {...propsForInput}
        />

        <span
          aria-hidden // true
          className={spanClassName}
        />

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
  type: 'checkbox',

  // Events.
  handleChange: () => {}
}

// Export.
export default Checkbox
