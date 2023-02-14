import { render, screen } from '@testing-library/react'
import { Button } from 'shared/ui'

describe('Button component', function () {
  render(<Button>HELLO</Button>)
  expect(screen.getByText('HELLO')).toBeInTheDocument()
})
