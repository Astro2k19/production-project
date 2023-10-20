import { render, screen } from '@testing-library/react'

import { Button, ButtonVariants } from './Button'

describe('Button component', function () {
	test('Default Button', () => {
		render(<Button>HELLO</Button>)
		expect(screen.getByText('HELLO')).toBeInTheDocument()
	})

	test('Button with variant', () => {
		render(
			<Button
				data-testid="btn"
				variant={ButtonVariants.CLEAR}
			>
				HELLO
			</Button>,
		)
		const btn = screen.getByTestId('btn')

		expect(btn).toHaveTextContent('HELLO')
		expect(btn).toHaveClass('clear')
	})
})
