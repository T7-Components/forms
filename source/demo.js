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
            label='Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label Checkbox label '
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
          All permutations of <code>&lt;button&gt;</code>:
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
