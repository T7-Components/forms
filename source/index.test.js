// Dependencies.
import * as all from './'

// Describe `<Component/>` name.
describe('T7 Forms -- index.js', () => {
  // Expected components.
  const componentList = [
    'Button',
    'Checkbox',
    'Input',
    'InputDate',
    'InputDateUK',
    'InputDateUS',
    'Label',
    'Radio',
    'Select',
    'Textarea',
    'Textdiv'
  ]

  // ==========================
  // Test for component export.
  // ==========================

  it('exports React components', () => {
    // Loop through.
    Object.keys(all).forEach((key) => {
      // Get component.
      const component = all[key]

      // Expected component?
      expect(componentList)
        .toContain(component.name)

      // Only functions?
      expect(typeof component)
        .toBe('function')
    })
  })
})
