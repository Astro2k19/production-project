import {
	type FC,
	type ReactNode,
	useCallback,
	useEffect,
	useState,
} from 'react'

import { classNames } from '@/shared/lib'

import { Overlay } from '../Overlay'
import { Portal } from '../Portal'
import cls from './Modal.module.scss'

interface ModalProps {
	className?: string
	children?: ReactNode
	isOpen: boolean
	onClose?: () => void
	lazy?: boolean
	withPortal?: boolean
}

export const Modal: FC<ModalProps> = props => {
	const {
		className,
		children,
		onClose,
		isOpen,
		lazy = false,
		withPortal = true,
	} = props

	const [isMounted, setIsMounted] = useState(false)

	const closeModal = useCallback(() => {
		if (onClose !== undefined) {
			onClose()
		}
	}, [onClose])

	const onKeyUp = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeModal()
			}
		},
		[closeModal],
	)

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true)
		}
	}, [isOpen])

	useEffect(() => {
		if (isOpen) {
			document.body.addEventListener('keyup', onKeyUp)
		}

		return () => {
			document.body.removeEventListener('keyup', onKeyUp)
		}
	}, [onKeyUp, isOpen])

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
	}

	if (lazy && !isMounted) {
		return null
	}

	if (withPortal) {
		return (
			<Portal>
				<div className={classNames([cls.modal], mods)}>
					<Overlay onClick={closeModal} />
					<div className={classNames([cls.content, className])}>
						{children}
					</div>
				</div>
			</Portal>
		)
	}

	return (
		<div className={classNames([cls.modal], mods)}>
			<Overlay onClick={closeModal} />
			<div className={classNames([cls.content, className])}>
				{children}
			</div>
		</div>
	)
}
