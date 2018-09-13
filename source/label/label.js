// Dependencies.
import React from 'react'
import Render from '@t7/render'
import PropTypes from 'prop-types'

// Define class.
class Label extends React.Component {
  // Render method.
  render () {
    // Props.
    const {
      id,
      label,
      required
    } = this.props

    // Expose UI.
    return (
      <Render if={label}>

        <label htmlFor={id}>

          {label}

          <Render if={required}>
            {' '}
            <abbr
              children='*'
              title='Required'
            />
          </Render>

        </label>

      </Render>
    )
  }
}

// Validation.
Label.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool
}

// Export.
export default Label
