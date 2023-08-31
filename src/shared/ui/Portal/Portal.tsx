import { createPortal } from 'react-dom'
import { type ReactNode, type ReactPortal } from 'react'

interface PortalProps {
  children: ReactNode
  domNode?: Element | null
}

export const Portal = ({ children, domNode }: PortalProps): ReactPortal => {
  return createPortal(children, domNode ?? document.body)
}
