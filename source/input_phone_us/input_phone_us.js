// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind,
  formatInteger,
  formatPhoneUS
} from '@t7/utils'

// UI components.
import { Input } from '../'

// Define class.
class InputPhoneUS extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Bind context.
    bind(this)
  }

  // Get API value.
  getApiValue (x = '') {
    x = formatInteger(x)

    if (x.length < 10) {
      x = ''
    }

    return x
  }

  // Change event.
  handleChange (e, value = '') {
    // Convert to number.
    const apiValue = this.getApiValue(value)

    // Callback.
    this.props.handleChange(e, value, apiValue)
  }

  // Render method.
  render () {
    // Events.
    const { handleChange } = this

    // Expose UI.
    return (
      <Input
        {...this.props}
        mask={formatPhoneUS}
        maxlength='12'
        placeholder='000-000-0000'
        handleChange={handleChange}
      />
    )
  }
}

// Validation.
InputPhoneUS.propTypes = {
  // Events.
  handleChange: PropTypes.func
}

// Defaults.
InputPhoneUS.defaultProps = {
  // Events.
  handleChange: () => {}
}

// Export.
export default InputPhoneUS
