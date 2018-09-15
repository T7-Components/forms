// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind,
  exists,
  unique
} from '@t7/utils'

// UI components.
import { Label } from '../'

// Define class.
class Select extends React.Component {
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
      target = {}
    } = e

    // Get value.
    const {
      value = ''
    } = target

    // Update state.
    this.setState({ value })

    // Callback.
    this.props.handleChange(e, value)
  }

  // Build list.
  buildList () {
    // Props.
    const { options } = this.props

    // Build list.
    const list = options.map((o = {}, i) => {
      // Peel apart.
      const {
        name,
        value
      } = o

      // Expose UI.
      return (
        <option
          key={i}
          value={value}
        >
          {name}
        </option>
      )
    })

    // Expose array.
    return list
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
      name,
      readonly,
      required,
      width
    } = this.props

    // Events.
    const { handleChange } = this

    // Default class="…".
    let className = ['t7-select']

    if (width === 'auto') {
      className.push('t7-select--width-auto')
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
      required,
      value,
      autoFocus: autofocus,
      onChange: handleChange,
      readOnly: readonly
    }

    // Expose UI.
    return (
      <React.Fragment>

        <Label
          {...propsForLabel}
        />

        <select {...propsForInput}>
          {this.buildList()}
        </select>

      </React.Fragment>
    )
  }
}

// Validation.
Select.propTypes = {
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  width: PropTypes.string,

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
  options: [],

  // Events.
  handleChange: () => {}
}

// Export.
export default Select
