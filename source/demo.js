// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'
import ListInline from '@t7/list-inline'

// Utility methods.
import { bind } from '@t7/utils'

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
  InputAlphanumeric,
  InputDateUK,
  InputDateUS,
  InputInteger,
  InputMoneyDE,
  InputMoneyIN,
  InputMoneyJP,
  InputMoneyKR,
  InputMoneyUK,
  InputMoneyUS,
  InputPhoneUS,
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
      controlledCheckboxBool: false,
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

        <p>
          <a href='https://github.com/T7-Components/forms/blob/master/source/demo.js'>
            View "demo.js" on GitHub
          </a>
        </p>

        <hr />

        <h2>
          Hybrid "controlled" elements…
        </h2>

        <p>
          The following form elements are examples of a hybrid approach, which involves treating all elements as if they have a <code>defaultValue</code>, while still allowing them to be overridden by a change to <code>this.props.value</code>.
        </p>

        <p>
          This is made possible each component having its own internal <code>this.state.value</code>, but also watching for changes via <code>getDerivedStateFromProps</code>. It has been our experience that this most closely aligns conceptually, with how one might expect form elements to work in a non-React environment.
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
          <InputDateUK
            label='UK date input (with mask)'
            value='2018-12-31'
            handleChange={(e, value, apiValue) => {
              window.console.log(
                'UK API date = "' + apiValue + '"'
              )
            }}
          />
        </p>

        <p>
          <InputDateUS
            label='US date input (with mask)'
            value='2018-12-31'
            handleChange={(e, value, apiValue) => {
              window.console.log(
                'US API date = "' + apiValue + '"'
              )
            }}
          />
        </p>

        <p>
          <InputPhoneUS
            label='US phone input (with mask)'
          />
        </p>

        <p>
          <InputAlphanumeric
            label='Alphanumeric input (with mask)'
            placeholder='Letters and numbers only'
          />
        </p>

        <p>
          <InputInteger
            label='Integer input (with mask)'
            placeholder='Integers only'
          />
        </p>

        <p>
          <InputMoneyDE
            label='German currency (with mask)'
            value={1000}
            handleChange={(e, value, apiValue) => {
              window.console.log(
                'DE API currency = ' + apiValue
              )
            }}
          />
        </p>

        <p>
          <InputMoneyIN
            label='Indian currency (with mask)'
            value={1000}
            handleChange={(e, value, apiValue) => {
              window.console.log(
                'IN API currency = ' + apiValue
              )
            }}
          />
        </p>

        <p>
          <InputMoneyJP
            label='Japanese currency (with mask)'
            value={1000}
            handleChange={(e, value, apiValue) => {
              window.console.log(
                'JP API currency = ' + apiValue
              )
            }}
          />
        </p>

        <p>
          <InputMoneyKR
            label='Korean currency (with mask)'
            value={1000}
            handleChange={(e, value, apiValue) => {
              window.console.log(
                'KR API currency = ' + apiValue
              )
            }}
          />
        </p>

        <p>
          <InputMoneyUK
            label='UK currency (with mask)'
            value={1000}
            handleChange={(e, value, apiValue) => {
              window.console.log(
                'UK API currency = ' + apiValue
              )
            }}
          />
        </p>

        <p>
          <InputMoneyUS
            label='US currency (with mask)'
            value={1000}
            handleChange={(e, value, apiValue) => {
              window.console.log(
                'US API currency = ' + apiValue
              )
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
              children='Open example.com'
            />
          </li>
          <li>
            <Button
              disabled // true
              href='https://example.com/'
              target='_blank'
              children='Open example.com'
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
              children='Button'
            />
          </li>
          <li>
            <Button
              mode='primary'
              size='small'
              children='Button'
            />
          </li>
          <li>
            <Button
              mode='positive'
              size='small'
              children='Button'
            />
          </li>
          <li>
            <Button
              mode='negative'
              size='small'
              children='Button'
            />
          </li>
          <li>
            <Button
              mode='warn'
              size='small'
              children='Button'
            />
          </li>
        </ListInline>

        <ListInline>
          <li>
            <Button
              disabled // true
              size='small'
              children='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='primary'
              size='small'
              children='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='positive'
              size='small'
              children='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='negative'
              size='small'
              children='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='warn'
              size='small'
              children='Button'
            />
          </li>
        </ListInline>

        <ListInline>
          <li>
            <Button
              children='Button'
            />
          </li>
          <li>
            <Button
              mode='primary'
              children='Button'
            />
          </li>
          <li>
            <Button
              mode='positive'
              children='Button'
            />
          </li>
          <li>
            <Button
              mode='negative'
              children='Button'
            />
          </li>
          <li>
            <Button
              mode='warn'
              children='Button'
            />
          </li>
        </ListInline>

        <ListInline>
          <li>
            <Button
              disabled // true
              children='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='primary'
              children='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='positive'
              children='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='negative'
              children='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='warn'
              children='Button'
            />
          </li>
        </ListInline>

        <ListInline>
          <li>
            <Button
              size='big'
              children='Button'
            />
          </li>
          <li>
            <Button
              mode='primary'
              size='big'
              children='Button'
            />
          </li>
          <li>
            <Button
              mode='positive'
              size='big'
              children='Button'
            />
          </li>
          <li>
            <Button
              mode='negative'
              size='big'
              children='Button'
            />
          </li>
          <li>
            <Button
              mode='warn'
              size='big'
              children='Button'
            />
          </li>
        </ListInline>

        <ListInline>
          <li>
            <Button
              disabled // true
              size='big'
              children='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='primary'
              size='big'
              children='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='positive'
              size='big'
              children='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='negative'
              size='big'
              children='Button'
            />
          </li>
          <li>
            <Button
              disabled // true
              mode='warn'
              size='big'
              children='Button'
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
