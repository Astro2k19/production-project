import { type ReactNode, type ReactPortal } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: ReactNode
    domNode?: Element | null
}

export const Portal = ({ children, domNode }: PortalProps): ReactPortal => {
    return createPortal(children, domNode ?? document.body)
}
