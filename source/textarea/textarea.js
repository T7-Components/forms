// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind,
  exists,
  trimMultiLine,
  unique
} from '@t7/utils'

// UI components.
import { Label } from '../'

// Define class.
class Textarea extends React.Component {
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

  // Called after `render`.
  componentDidMount () {
    document.body.setAttribute('spellcheck', false)
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
      value = trimMultiLine(value)
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
      label,
      maxlength,
      name,
      placeholder,
      readonly,
      required
    } = this.props

    // Events.
    const { handleChange } = this

    // Props for label.
    const propsForLabel = {
      id,
      label,
      required
    }

    // Props for input.
    const propsForInput = {
      disabled,
      id,
      name,
      placeholder,
      required,
      value,
      autoFocus: autofocus,
      className: 't7-textarea',
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

        <textarea
          {...propsForInput}
        />

      </React.Fragment>
    )
  }
}

// Validation.
Textarea.propTypes = {
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,

  maxlength: PropTypes.oneOfType([
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

// Defaults.
Textarea.defaultProps = {
  // Events.
  handleChange: () => {}
}

// Export.
export default Textarea
