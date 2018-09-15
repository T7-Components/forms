// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'
import ListInline from '@t7/list-inline'

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
            options={
              [
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
                }
              ]
            }
          />
        </p>

        <p>
          <Select
            disabled // true
            label='Select (disabled)'
            options={
              [
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
                }
              ]
            }
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
          required // true
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
