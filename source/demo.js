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
            label='Input label'
            placeholder='Input placeholder'
          />
        </p>

        <p>
          <Checkbox
            label='Checkbox label'
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
          <Select
            label='Select label'
          />
        </p>

        <p>
          <Textarea
            label='Textarea label'
            placeholder='Textarea placeholder'
          />
        </p>

        <Textdiv
          label='Textdiv label'
          placeholder='Textdiv placeholder'
        />

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
