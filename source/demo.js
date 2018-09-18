// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'
import ListInline from '@t7/list-inline'

// Utility methods.
import {
  bind
} from '@t7/utils'

// CSS.
import '../node_modules/@t7/list-inline/dist/index.css'
import './sanitize.css'
import './demo.css'
import './index.css'

// UI components.
import {
  Button,
  Checkbox,
  Input,
  Radio,
  Select,
  Textarea,
  Textdiv
} from './'

// Example `<select>` options.
const OPTIONS = [
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

// Define class.
class Demo extends React.Component {
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
    this.state = {
      controlledInputValue: 'TEST',
      controlledSelectValue: ''
    }
  }

  // Change controlled checkbox.
  handleChangeControlledCheckbox (e, v, controlledCheckboxBool) {
    this.setState({ controlledCheckboxBool })
  }

  // Change controlled input.
  handleChangeControlledInput (e, controlledInputValue) {
    this.setState({ controlledInputValue })
  }

  // Change controlled select.
  handleChangeControlledSelect (e, controlledSelectValue) {
    this.setState({ controlledSelectValue })
  }

  // Render method.
  render () {
    // State.
    const {
      controlledCheckboxBool,
      controlledInputValue,
      controlledSelectValue
    } = this.state

    // Events.
    const {
      handleChangeControlledCheckbox,
      handleChangeControlledInput,
      handleChangeControlledSelect
    } = this

    // Expose UI.
    return (
      <React.Fragment>

        <h1>
          @t7/forms
        </h1>

        <hr />

        <h2>
          Hybrid "controlled" elements…
        </h2>

        <p>
          The following form elements are examples of a hybrid approach to form elements, which involves treating all elements as if they have a <code>defaultValue</code>, while still allowing them to be overridden by a change in props.
        </p>

        <p>
          This is made possible each component having its own internal state, but also watching for changes via <code>getDerivedStateFromProps</code>. It has been our experience that this most closely mirrors how one might expect form elements to work in a non-React environment.
        </p>

        <p>
          If for some reason an input literally needed to be fully "controlled," this could still be accomplished by using the <code>readonly</code> attribute.
        </p>

        <h3>
          Hybrid: Checkboxes
        </h3>

        <p>
          <Checkbox
            label='Master checkbox'
            checked={controlledCheckboxBool}
            handleChange={handleChangeControlledCheckbox}
          />
        </p>

        <p>
          <Checkbox
            label='Checkbox: changes with "Master checkbox"'
            checked={controlledCheckboxBool}
          />
        </p>

        <p>
          <Checkbox
            disabled // true
            label='Checkbox: changes with "Master checkbox" (disabled)'
            checked={controlledCheckboxBool}
          />
        </p>

        <h3>
          Hybrid: Select inputs
        </h3>

        <p>
          <Select
            label='Master select'
            options={OPTIONS}
            value={controlledSelectValue}
            handleChange={handleChangeControlledSelect}
          />
        </p>

        <p>
          <Select
            label='Select: changes with "Master select"'
            options={OPTIONS}
            value={controlledSelectValue}
          />
        </p>

        <p>
          <Select
            disabled // true
            label='Select: changes with "Master select" (disabled)'
            options={OPTIONS}
            value={controlledSelectValue}
          />
        </p>

        <h3>
          Hybrid: Text inputs
        </h3>

        <p>
          <Input
            label='Master input'
            value={controlledInputValue}
            handleChange={handleChangeControlledInput}
          />
        </p>

        <p>
          <Input
            label='Input: changes with "Master input"'
            value={controlledInputValue}
          />
        </p>

        <p>
          <Input
            readonly // true
            label='Input: changes with "Master input" (readonly)'
            value={controlledInputValue}
          />
        </p>

        <p>
          <Input
            disabled // true
            label='Input: changes with "Master input" (disabled)'
            value={controlledInputValue}
          />
        </p>

        <p>
          <Textarea
            label='Textarea: changes with "Master input"'
            value={controlledInputValue}
          />
        </p>

        <Textdiv
          label='Textdiv: changes with "Master input"'
          value={controlledInputValue}
        />

        <hr />

        <h2>
          Other examples…
        </h2>

        <p>
          <Input
            required // true
            label='Input'
            placeholder='Input placeholder'
          />
        </p>

        <p>
          <Input
            label='Numeric input (with mask)'
            placeholder='Numbers only, please'
            value='0123456789'
            mask={(value = '') => {
              return value.replace(/\D/g, '')
            }}
          />
        </p>

        <p>
          <Input
            disabled // true
            label='Input (disabled)'
            placeholder='Input placeholder'
          />
        </p>

        <p>
          <Select
            required // true
            label='Select'
            options={OPTIONS}
          />
        </p>

        <p>
          <Select
            disabled // true
            label='Select (disabled)'
            options={OPTIONS}
          />
        </p>

        <p>
          <Textarea
            required // true
            label='Textarea'
            placeholder='Textarea placeholder'
          />
        </p>

        <p>
          <Textarea
            readonly // true
            label='Textarea (readonly)'
            placeholder='Textarea placeholder'
            value='Read only value'
          />
        </p>

        <p>
          <Textarea
            disabled // true
            label='Textarea (disabled)'
            placeholder='Textarea placeholder'
          />
        </p>

        <Textdiv
          required // true
          label='Textdiv'
          placeholder='Textdiv placeholder'
        />

        <Textdiv
          readonly // true
          label='Textdiv (readonly)'
          placeholder='Textarea placeholder'
          value='Read only value'
        />

        <Textdiv
          disabled // true
          label='Textdiv (disabled)'
          placeholder='Textdiv placeholder'
        />

        <p>
          <Checkbox
            disabled // true
            label='Checkbox (disabled)'
          />
        </p>

        <p>
          <Checkbox
            label='By submitting this form, you hereby grant ACME Corp. the right to conduct a background check. If you are found to be falsifying information, you will be prosecuted to the fullest extent of intergalactic law. You also acknowledge that should you be accepted to the training program, we reserve the right to eject you (into space) if you are a danger to the rest of the crew. If you are captured during any covert missions, Space Force will disavow all knowledge of your official involvement, and you will be branded as a rogue agent.'
          />
        </p>

        <p>
          <Radio
            checked // true
            label='Radio label 1'
            name='radio_list'
          />
        </p>

        <p>
          <Radio
            label='Radio label 2'
            name='radio_list'
          />
        </p>

        <p>
          <Radio
            disabled // true
            label='Radio label 3 (disabled)'
            name='radio_list'
          />
        </p>

        <p>
          Example <code>&lt;a&gt;</code> tag, styled as a button:
        </p>

        <ListInline>
          <li>
            <Button
              href='https://example.com/'
              target='_blank'
              text='Open example.com'
            />
          </li>
          <li>
            <Button
              disabled // true
              href='https://example.com/'
              target='_blank'
              text='Open example.com'
            />
          </li>
        </ListInline>

        <p>
          All <code>&lt;button&gt;</code> permutations:
        </p>

        <ListInline>
          <li>
            <Button
              size='small'
              text='Button'
            />
          </li>
          <li>
            <Button
              mode='primary'
              size='small'
              text='Button'
            />
          </li>
          <li>
            <Button
              mode='positive'
              size='small'
              text='Button'
            />
          </li>
          <li>
            <Button
              mode='negative'
              size='small'
              text='Button'
            />
          </li>
          <li>
            <Button
              mode='warn'
              size='small'
              text='Button'
            />
          </li>
        </ListInline>

        <ListInline>
          <li>
            <Button
              disabled // true
              size='small'
              text='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='primary'
              size='small'
              text='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='positive'
              size='small'
              text='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='negative'
              size='small'
              text='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='warn'
              size='small'
              text='Button'
            />
          </li>
        </ListInline>

        <ListInline>
          <li>
            <Button
              text='Button'
            />
          </li>
          <li>
            <Button
              mode='primary'
              text='Button'
            />
          </li>
          <li>
            <Button
              mode='positive'
              text='Button'
            />
          </li>
          <li>
            <Button
              mode='negative'
              text='Button'
            />
          </li>
          <li>
            <Button
              mode='warn'
              text='Button'
            />
          </li>
        </ListInline>

        <ListInline>
          <li>
            <Button
              disabled // true
              text='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='primary'
              text='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='positive'
              text='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='negative'
              text='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='warn'
              text='Button'
            />
          </li>
        </ListInline>

        <ListInline>
          <li>
            <Button
              size='big'
              text='Button'
            />
          </li>
          <li>
            <Button
              mode='primary'
              size='big'
              text='Button'
            />
          </li>
          <li>
            <Button
              mode='positive'
              size='big'
              text='Button'
            />
          </li>
          <li>
            <Button
              mode='negative'
              size='big'
              text='Button'
            />
          </li>
          <li>
            <Button
              mode='warn'
              size='big'
              text='Button'
            />
          </li>
        </ListInline>

        <ListInline>
          <li>
            <Button
              disabled // true
              size='big'
              text='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='primary'
              size='big'
              text='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='positive'
              size='big'
              text='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='negative'
              size='big'
              text='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='warn'
              size='big'
              text='Button'
            />
          </li>
        </ListInline>

      </React.Fragment>
    )
  }
}

// Get root.
const root = document.getElementById('root')

// Render.
ReactDOM.render(<Demo />, root)
