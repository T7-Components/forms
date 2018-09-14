// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'

// CSS.
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

// Define class.
class Demo extends React.Component {
  // Render method.
  render () {
    // Expose UI.
    return (
      <React.Fragment>

        <h1>
          @t7/forms
        </h1>

        <p>
          <a href='./coverage/lcov-report/index.html'>
            View test coverage
          </a>
        </p>

        <p>
          <Input
            required // true
            label='Input'
            placeholder='Input placeholder'
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
          />
        </p>

        <p>
          <Select
            disabled // true
            label='Select (disabled)'
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
            disabled // true
            label='Textarea (disabled)'
            placeholder='Textarea placeholder'
          />
        </p>

        <Textdiv
          label='Textdiv'
          placeholder='Textdiv placeholder'
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
            label='By submitting this form, you hereby grant ACME Corp. the right to conduct a background check. If you are found to be falsifying information, you will be prosecuted to the fullest extent of intergalactic law. You also acknowledge that should you be accepted to the training program, we reserve the right to eject you (into space) if you are a danger to the rest of the crew. If you are captured during any covert missions, the United States will disavow all knowledge of your official involvement, and you will be branded as a rogue agent.'
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

        <p>
          <Button
            href='https://example.com/'
            target='_blank'
            text='Go to Example.com'
          />
        </p>

        <p>
          All <code>&lt;button&gt;</code> permutations:
        </p>

        <p>
          <Button
            size='small'
            text='Button text'
          />
          {' '}
          <Button
            mode='primary'
            size='small'
            text='Button text'
          />
          {' '}
          <Button
            mode='positive'
            size='small'
            text='Button text'
          />
          {' '}
          <Button
            mode='negative'
            size='small'
            text='Button text'
          />
          {' '}
          <Button
            mode='warn'
            size='small'
            text='Button text'
          />
        </p>

        <p>
          <Button
            text='Button text'
          />
          {' '}
          <Button
            mode='primary'
            text='Button text'
          />
          {' '}
          <Button
            mode='positive'
            text='Button text'
          />
          {' '}
          <Button
            mode='negative'
            text='Button text'
          />
          {' '}
          <Button
            mode='warn'
            text='Button text'
          />
        </p>

        <p>
          <Button
            size='big'
            text='Button text'
          />
          {' '}
          <Button
            mode='primary'
            size='big'
            text='Button text'
          />
          {' '}
          <Button
            mode='positive'
            size='big'
            text='Button text'
          />
          {' '}
          <Button
            mode='negative'
            size='big'
            text='Button text'
          />
          {' '}
          <Button
            mode='warn'
            size='big'
            text='Button text'
          />
        </p>

      </React.Fragment>
    )
  }
}

// Get root.
const root = document.getElementById('root')

// Render.
ReactDOM.render(<Demo />, root)
