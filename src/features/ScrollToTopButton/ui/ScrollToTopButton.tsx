import TopArrow from '@/shared/assets/icons/TopArrow.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'

export const ScrollToTopButton = () => {
    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <Icon
            Svg={TopArrow}
            clickable
            onClick={onClick}
        />
    )
}
