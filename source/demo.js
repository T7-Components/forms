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
          <Button
            text='Button text'
          />
        </p>

        <p>
          <Checkbox
            label='Checkbox label'
          />
        </p>

        <p>
          <Input
            label='Input label'
            placeholder='Input placeholder'
          />
        </p>

        <p>
          <Radio
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

      </React.Fragment>
    )
  }
}

// Get root.
const root = document.getElementById('root')

// Render.
ReactDOM.render(<Demo />, root)