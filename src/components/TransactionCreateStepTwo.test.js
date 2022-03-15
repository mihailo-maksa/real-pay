import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TransactionCreateStepTwo from './TransactionCreateStepTwo'

// Unit tests (individual functions)

test('on initial render, pay button is disabled', async () => {
  render(
    <TransactionCreateStepTwo sender={{ id: '5' }} receiver={{ id: '7' }} />,
  )
  expect(await screen.findByRole('button', { name: /pay/i })).toBeDisabled()
})

test('if user adds amount and note, pay button is enabled', async () => {
  render(
    <TransactionCreateStepTwo sender={{ id: '5' }} receiver={{ id: '7' }} />,
  )

  userEvent.type(screen.getByPlaceholderText(/amount/i), '50')
  userEvent.type(screen.getByPlaceholderText(/add a note/i), 'dinner')

  expect(await screen.findByRole('button', { name: /pay/i })).toBeEnabled()
})

// Integration tests (complete user workflows; consisting of multiple unit tests)

test('integration test: user creates transactions', async () => {
  render(
    <TransactionCreateStepTwo sender={{ id: '1' }} receiver={{ id: '3' }} />,
  )

  expect(await screen.findByRole('button', { name: /pay/i })).toBeDisabled()

  userEvent.type(screen.getByPlaceholderText(/amount/i), '790')
  userEvent.type(screen.getByPlaceholderText(/add a note/i), 'rent')

  expect(await screen.findByRole('button', { name: /pay/i })).toBeEnabled()
})

// End-to-end tests ()
