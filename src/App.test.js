import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'
import React from 'react'
import '@testing-library/jest-dom'

describe('App', () => {
  beforeEach(() => {
    render(<App />)
    jest.useFakeTimers()
    jest.spyOn(React, 'useEffect').mockImplementation(React.useEffect)
  })
  test('renders Initail page successfully', () => {
    const header = screen.getByTestId('header')
    expect(header).toBeInTheDocument()
  })

  test('cards loaded successfully', async () => {
    const checkBox = screen.getAllByTestId('checkbox-selector')
    expect(checkBox[0]).toBeInTheDocument()
  })
})
