/* L3 */
import React from 'react'
import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  // These `.toHave...` assertions are from Jest Dom, the project has been
  // configured to automatically import them.
  expect(div.querySelector('input')).toHaveAttribute('type', 'number')
  expect(div.querySelector('label')).toHaveTextContent('Favorite Number')
})
