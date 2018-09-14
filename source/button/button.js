// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Utility methods.
import {
  bind
} from '@t7/utils'

// Define class.
class Button extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Bind context.
    bind(this)
  }

  // Button click.
  handleClick (e = {}) {
    // Props
    const { buttonData } = this.props

    // Callback.
    this.props.handleClick(e, buttonData)
  }

  // Render method.
  render () {
    // Props.
    const {
      ariaControls,
      disabled,
      href,
      mode,
      size,
      target,
      text,
      title,
      type
    } = this.props

    // Events.
    const { handleClick } = this

    // Set in conditional.
    let rel
    let tabIndex

    // Not disabled?
    if (!disabled) {
      tabIndex = 0

      // External link?
      if (href && target) {
        rel = 'noopener noreferrer'
      }
    }

    // Bundle.
    const bundle = {
      disabled,
      tabIndex,
      title,

      // Class name.
      className: 't7-button',

      // Mode.
      'data-mode': mode,

      // Size.
      'data-size': size,

      // Events.
      onClick: (
        disabled
          ? null
          : handleClick
      )
    }

    // Link props.
    const linkProps = {
      ...bundle,
      rel,
      href: (
        disabled
          ? null
          : href
      ),
      target: (
        disabled
          ? null
          : target
      )
    }

    // Button props.
    const buttonProps = {
      ...bundle,
      type,
      'aria-controls': ariaControls
    }

    // Presuppose `<button>`.
    let button = (
      <button {...buttonProps}>
        {text}
      </button>
    )

    // Is it a link?
    if (href) {
      // Build link.
      button = (
        <a {...linkProps}>
          {text}
        </a>
      )
    }

    // Expose the UI.
    return button
  }
}

// Validation.
Button.propTypes = {
  ariaControls: PropTypes.string,
  buttonData: PropTypes.any,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  mode: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  target: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,

  // Events.
  handleClick: PropTypes.func
}

// Prop defaults.
Button.defaultProps = {
  disabled: false,
  mode: 'default',
  size: 'default',
  type: 'button',

  // Events.
  handleClick: () => {}
}

// Export.
export default Button
