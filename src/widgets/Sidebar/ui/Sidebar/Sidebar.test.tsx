import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

describe('Sidebar component', function () {
  test('Toggle sidebar', () => {
    componentRender(
        <Sidebar />
    )
    // screen.debug()
    const toggleBtn = screen.getByTestId('toggle-btn')
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    fireEvent.click(toggleBtn)

    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
  })
})
