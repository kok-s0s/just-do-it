import { render } from '@testing-library/react'

import { Welcome } from './index'

test('Greetings should renders', () => {
  const { getByText, getByAltText } = render(<Welcome />)

  expect(
    getByText('An Electron boilerplate including TypeScript, React, Jest and ESLint.')
  ).toBeTruthy()
  expect(getByAltText('ReactJS logo')).toBeTruthy()
})
