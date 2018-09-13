// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import utils from '@t7/utils'

// Define class.
class Radio extends React.Component {
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
    let checked = this.props.checked

    // Ensure a real boolean.
    if (!utils.exists(checked)) {
      checked = this.props.defaultChecked || false
    }

    this.state = {
      checked: checked,
      id: this.props.id || utils.unique()
    }
  }

  // Force state change.
  componentWillReceiveProps (nextProps) {
    const newChecked = nextProps.checked
    const oldChecked = this.props.checked

    const isValid =
      utils.exists(newChecked) &&
      newChecked !== oldChecked

    if (isValid) {
      this.setState({
        checked: newChecked
      })
    }
  }

  handleChange (e) {
    const el = e.target
    const checked = el.checked
    const value = utils.trim(el.value)
    const handleChange = this.props.handleChange

    this.setState({
      checked: checked
    })

    // Exit, if no callback.
    if (typeof handleChange === 'function') {
      handleChange(e, value, checked)
    }
  }

  // Render method.
  render () {
    // State driven.
    const checked = this.state.checked
    const id = this.state.id

    // Props driven.
    const autofocus = this.props.autofocus
    const disabled = this.props.disabled
    const label = this.props.label
    const name = this.props.name || id
    const required = this.props.required
    const value = this.props.value || label

    // Events.
    const handleChange = this.handleChange

    return (
      <label
        htmlFor={id}
        className='t7-form__radio__label'
      >
        <input
          autoFocus={autofocus}
          className='t7-form__radio'
          disabled={disabled}
          id={id}
          name={name}
          required={required}
          type='radio'
          value={value}

          checked={checked}
          onChange={handleChange}
        />
        <span className='t7-form__radio__fake' />
        {label}
      </label>
    )
  }
}

// Validation.
Radio.propTypes = {
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,

  // Alphanumeric.
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // Control checked state.
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,

  // Events.
  handleChange: PropTypes.func
}

// Prop defaults.
Radio.defaultProps = {
  label: 'Individual radio label'
}

// Export.
export default Radio
