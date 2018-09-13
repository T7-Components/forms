// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import utils from '@t7/utils'

// Define class.
class Select extends React.Component {
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

  // Input value change.
  handleChange (e) {
    const value = e.target.value

    this.setState({
      value: value
    })

    // Change callback.
    const handleChange = this.props.handleChange

    // Does callback exist?
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
    const ariaControls = this.props.ariaControls
    const disabled = this.props.disabled
    const name = this.props.name || id
    const options = this.props.options
    const readonly = this.props.readonly
    const required = this.props.required
    const width = this.props.width

    // Events.
    const handleChange = this.handleChange

    // Default class="…".
    let className = ['t7-form__select']

    if (width === 'auto') {
      className.push('t7-form__select--width-auto')
    }

    // Convert to string.
    className = className.join(' ')

    // Build list.
    const listItems = options.map((o, i) => {
      const value =
        utils.exists(o.value)
          ? o.value
          : o.id

      const name = o.name

      return (
        <option
          key={i}
          value={value}
        >
          {name}
        </option>
      )
    })

    // Expose UI.
    return (
      <select
        aria-controls={ariaControls}
        autoFocus={autofocus}
        className={className}
        disabled={disabled}
        id={id}
        name={name}
        readOnly={readonly}
        required={required}

        value={value}

        onChange={handleChange}
      >
        {listItems}
      </select>
    )
  }
}

// Validation.
Select.propTypes = {
  ariaControls: PropTypes.string,
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
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
Select.defaultProps = {
  options: [
    {
      value: '',
      name: 'Select...'
    },
    {
      value: '1',
      name: 'Uno'
    },
    {
      value: '2',
      name: 'Dos'
    },
    {
      value: '3',
      name: 'Tres'
    }
  ]
}

// Export.
export default Select
