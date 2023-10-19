import { useCallback, useMemo, useState } from 'react';

type useHoverBind = [
	boolean,
	{
		onMouseEnter: () => void;
		onMouseLeave: () => void;
	}
];

export const useHover = (): useHoverBind => {
	const [isHover, setIsHover] = useState(false);

	const onMouseEnter = useCallback(() => {
		setIsHover(true);
	}, []);

	const onMouseLeave = useCallback(() => {
		setIsHover(false);
	}, []);

	return useMemo(
		() => [isHover, { onMouseEnter, onMouseLeave }],
		[isHover, onMouseEnter, onMouseLeave]
	);
};
