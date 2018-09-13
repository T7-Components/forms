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
      maxlength,
      name,
      placeholder,
      readonly,
      required,
      value
    } = this.props

    // Events.
    const { handleChange } = this

    // Bundle.
    const bundle = {
      disabled,
      id,
      name,
      placeholder,
      required,
      value,
      autoFocus: autofocus,
      className: 't7-form__textarea',
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
        />

        <textarea
          {...bundle}
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
  placeholder: '',
  value: '',

  // Events.
  handleChange: () => {}
}

// Export.
export default Textarea