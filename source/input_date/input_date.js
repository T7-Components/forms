// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind,
  formatDate,
  trim
} from '@t7/utils'

// UI components.
import { Input } from '../'

// Date formats.
const DD_MM_YYYY = 'DD/MM/YYYY'
const MM_DD_YYYY = 'MM/DD/YYYY'

const MM_DD_YYYY_TO_API = '$3-$1-$2'
const MM_DD_YYYY_TO_UI = '$2/$3/$1'

const DD_MM_YYYY_TO_API = '$3-$2-$1'
const DD_MM_YYYY_TO_UI = '$3/$2/$1'

const FORMAT_FROM_API = /^(\d{4})-(\d{2})-(\d{2})/
const FORMAT_FROM_UI = /^(\d{2})\/(\d{2})\/(\d{4})/

const CONVERT_VALUE_FORMAT = {
  [DD_MM_YYYY]: DD_MM_YYYY_TO_UI,
  [MM_DD_YYYY]: MM_DD_YYYY_TO_UI
}

const HANDLE_CHANGE_FORMAT = {
  [DD_MM_YYYY]: DD_MM_YYYY_TO_API,
  [MM_DD_YYYY]: MM_DD_YYYY_TO_API
}

const RENDER_FORMAT = {
  [DD_MM_YYYY]: DD_MM_YYYY,
  [MM_DD_YYYY]: MM_DD_YYYY
}

// Define class.
class InputDate extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Bind context.
    bind(this)
  }

  // Change event.
  handleChange (e, value = '') {
    // Props
    const { dateFormat } = this.props

    // Regex.
    const BEFORE = FORMAT_FROM_UI
    const AFTER = HANDLE_CHANGE_FORMAT[dateFormat]

    // Format?
    let apiValue = (
      BEFORE.test(value)
        ? value.replace(BEFORE, AFTER)
        : ''
    )

    // Get date.
    const date = new Date(apiValue)
    const isInvalid = isNaN(date.getTime())

    // Invalid?
    if (isInvalid) {
      apiValue = ''
    }

    // Callback.
    this.props.handleChange(e, value, apiValue)
  }

  // Convert.
  convertValue () {
    // Props.
    const { dateFormat } = this.props
    let { value } = this.props

    // Trim to 10 characters.
    value = trim(value).slice(0, 10)

    // Regex.
    const BEFORE = FORMAT_FROM_API
    const AFTER = CONVERT_VALUE_FORMAT[dateFormat]

    // Format to "MM/DD/YYYY".
    value = value.replace(BEFORE, AFTER)

    // Expose string.
    return value
  }

  // Render method.
  render () {
    // Props.
    const { dateFormat } = this.props

    // Events.
    const { handleChange } = this

    // Placeholder.
    const placeholder = RENDER_FORMAT[dateFormat]

    // Expose UI.
    return (
      <Input
        {...this.props}
        placeholder={placeholder}
        value={this.convertValue()}

        // Events.
        handleChange={handleChange}
        mask={formatDate}
      />
    )
  }
}

// Validation.
InputDate.propTypes = {
  dateFormat: PropTypes.string,
  value: PropTypes.string,

  // Events.
  handleChange: PropTypes.func
}

// Defaults.
InputDate.defaultProps = {
  dateFormat: DD_MM_YYYY,

  // Events.
  handleChange: () => {}
}

// Export.
export default InputDate
