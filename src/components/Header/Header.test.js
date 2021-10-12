import { render, screen } from '@testing-library/react'
import React from 'react'
import Header from './Header'

test('renders header components successfully', () => {
  render(<Header />)
  const linkElement = screen.getByTestId('header-logo')
  expect(linkElement).toBeDefined()
})
