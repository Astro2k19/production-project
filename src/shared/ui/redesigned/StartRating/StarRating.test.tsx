import { fireEvent, screen } from '@testing-library/react'

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

import { StartRating } from './StartRating'

describe('StarRating', () => {
    test('Clicking on star updates star rating', () => {
        componentRender(<StartRating />)

        const star = screen.getByTestId(`StarRating.3`)
        fireEvent.click(star)
        expect(screen.getByTestId(`StarRating.1`)).toHaveAttribute(
            'data-selected',
            'true',
        )
        expect(screen.getByTestId(`StarRating.2`)).toHaveAttribute(
            'data-selected',
            'true',
        )
        expect(screen.getByTestId(`StarRating.3`)).toHaveAttribute(
            'data-selected',
            'true',
        )
        expect(screen.getByTestId(`StarRating.4`)).toHaveAttribute(
            'data-selected',
            'false',
        )
        expect(screen.getByTestId(`StarRating.5`)).toHaveAttribute(
            'data-selected',
            'false',
        )
    })

    test('Mouse hover effect on star rating', () => {
        componentRender(<StartRating />)

        const star = screen.getByTestId(`StarRating.2`)
        fireEvent.mouseEnter(star)

        expect(screen.getByTestId(`StarRating.1`)).toHaveAttribute(
            'data-selected',
            'true',
        )
        expect(screen.getByTestId(`StarRating.2`)).toHaveAttribute(
            'data-selected',
            'true',
        )
        expect(screen.getByTestId(`StarRating.3`)).toHaveAttribute(
            'data-selected',
            'false',
        )
        expect(screen.getByTestId(`StarRating.4`)).toHaveAttribute(
            'data-selected',
            'false',
        )
        expect(screen.getByTestId(`StarRating.5`)).toHaveAttribute(
            'data-selected',
            'false',
        )

        fireEvent.mouseOut(star)

        expect(screen.getByTestId(`StarRating.1`)).toHaveAttribute(
            'data-selected',
            'false',
        )
        expect(screen.getByTestId(`StarRating.2`)).toHaveAttribute(
            'data-selected',
            'false',
        )
        expect(screen.getByTestId(`StarRating.3`)).toHaveAttribute(
            'data-selected',
            'false',
        )
        expect(screen.getByTestId(`StarRating.4`)).toHaveAttribute(
            'data-selected',
            'false',
        )
        expect(screen.getByTestId(`StarRating.5`)).toHaveAttribute(
            'data-selected',
            'false',
        )
    })
})
