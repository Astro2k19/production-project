import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { renderWith18nextProvider } from 'shared/config/i18n/renderWith18nextProvider'

describe('Sidebar component', function () {
  test('Toggle sidebar', () => {
    renderWith18nextProvider(<Sidebar />)
    // screen.debug()
    const toggleBtn = screen.getByTestId('toggle-btn')
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    fireEvent.click(toggleBtn)

    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
  })
})
