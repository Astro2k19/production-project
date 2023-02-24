import { fireEvent, screen } from '@testing-library/react'
import { Counter } from './Counter'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Sidebar component', function () {
  test('Toggle sidebar', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10
        }
      }
    }
    )
    // screen.debug()
    const incrementBtn = screen.getByTestId('btn-increment')
    const decrementBtn = screen.getByTestId('btn-decrement')

    expect(screen.getByTestId('counter-output')).toHaveTextContent('10')
    fireEvent.click(incrementBtn)
    expect(screen.getByTestId('counter-output')).toHaveTextContent('11')
    fireEvent.click(decrementBtn)
    fireEvent.click(decrementBtn)
    expect(screen.getByTestId('counter-output')).toHaveTextContent('9')
  })
})
