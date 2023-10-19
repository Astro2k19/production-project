import { memo, ElementType, ComponentType } from 'react';

import { classNames } from '@/shared/lib';

import cls from './Overlay.module.scss';

type ComponentWithAsProp<
	T extends ElementType = ElementType,
	P = Record<string, unknown>
> = {
	as?: T | keyof JSX.IntrinsicElements;
} & Omit<P, 'as'>;

type OverlayProps = ComponentWithAsProp<
	keyof JSX.IntrinsicElements | ComponentType<any>,
	{
		className?: string;
		onClick?: () => void;
		style?: any; // TODO: need to fix this
	}
>;

export const Overlay = memo(
	({ className, onClick, style, as: Tag = 'div', ...rest }: OverlayProps) => {
		return (
			<Tag
				className={classNames([cls.overlay, className])}
				onClick={onClick}
				style={style}
				{...rest}
			/>
		);
	}
);
